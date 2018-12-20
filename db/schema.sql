/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to execute the queries in this file.
 */

CREATE DATABASE IF NOT EXISTS booking_checkout;

USE booking_checkout;

CREATE TABLE rooms (
  room_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nightly_price INT NOT NULL,
  past_week_views INT NOT NULL,
  cleaning_fee INT NOT NULL,
  service_fee INT NOT NULL,
  last_updated DATE,
  review_count INT NOT NULL,
  avg_rating INT NOT NULL
);

CREATE TABLE bookings (
  booking_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room_id INT NOT NULL,
  check_in DATE,
  check_out DATE,
  adults INT NOT NULL,
  children INT NOT NULL,
  infants INT NOT NULL,
  FOREIGN KEY (room_id) REFERENCES rooms (room_id)
);