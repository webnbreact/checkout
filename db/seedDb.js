const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'booking_checkout',
});

const roomsQuery = 'INSERT INTO rooms (nightly_price, past_week_views, cleaning_fee, service_fee, last_updated, review_count, avg_rating) VALUES (?, ?, ?, ?, ?, ?, ?)';

for (let i = 0; i < 100; i += 1) {
  connection.query(roomsQuery, [faker.finance.amount(50, 500, 0), faker.random.number(1000),
    faker.finance.amount(0, 100, 0), faker.finance.amount(0, 20, 0), faker.date.past(0.4),
    faker.random.number(400), faker.random.number({ min: 1, max: 10 })], (err) => {
    if (err) {
      throw err;
    }
    if (i === 99) {
      console.log('Rooms successfully added to db');
    }
  });
}

const bookingsQuery = 'INSERT INTO bookings (room_id, check_in, check_out, adults, children, infants, blackout) VALUES (?, ?, ?, ?, ?, ?, ?)';

let roomId = 1;
while (roomId <= 100) {
  const bookingsPerRoom = faker.random.number({ min: 10, max: 70 });
  for (let i = 0; i < bookingsPerRoom; i += 1) {
    const checkInDate = faker.date.between('2018-12-01', '2019-12-31');
    const checkOutDate = faker.date.future((14 / 365), checkInDate);
    connection.query(bookingsQuery, [roomId, checkInDate, checkOutDate, faker.random.number({ min: 1, max: 3 }),
      faker.random.number(2), faker.random.objectElement({ one: 0, two: 0, three: 1 }), false], (err) => {
      if (err) {
        throw err;
      }
    });
  }

  if (roomId === 100) {
    console.log('Bookings successfully added to db');
  }
  roomId += 1;
}
