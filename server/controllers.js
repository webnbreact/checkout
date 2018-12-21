const db = require('../db/index.js');

const getRoomData = (roomId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM rooms WHERE room_id=?', [roomId], (err, roomInfo) => {
      if (err) {
        reject(err);
      } else {
        resolve(roomInfo);
      }
    });
  });
};
