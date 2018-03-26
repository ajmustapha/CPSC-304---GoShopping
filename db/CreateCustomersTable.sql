DROP TABLE IF EXISTS Customers;
CREATE TABLE Customers(
  customer_id SERIAL,
fname VARCHAR(50) NOT NULL,
lname VARCHAR(50) NOT NULL,
password VARCHAR(32) NOT NULL,
phone VARCHAR(22),
email VARCHAR(320) UNIQUE,
creditcard VARCHAR(16),
address VARCHAR(50),
cart_id SERIAL,
PRIMARY KEY (customer_id),
FOREIGN KEY (customer_id, cart_id) REFERENCES Cart(customer_id, cart_id));

INSERT INTO Customers (fname, lname, password, phone, email, creditcard, address)
VALUES ('Ashley', 'Barnes', 'password', '123-456-7899', 'a@abc.com', 1234123412341235, '1 Rand Ave.');

INSERT INTO Customers (fname, lname, password, phone, email, creditcard, address)
VALUES ('Bob', 'Barnes', 'abc123', '123-426-9900', 'b@bob.com', 1234123412341212, '2 Nowhere Street');

INSERT INTO Customers (fname, lname, password, phone, email, creditcard, address)
VALUES ('Tim', 'Letsgo', 'letsgo', '9231235882', 'c@tim.com', 1234123412441234, '15 Penny Lane');

INSERT INTO Customers (fname, lname, password, phone, email, creditcard, address)
VALUES ('Dennis', 'Love', 'ilove304', '9593852212', 'd@rand.com', 1234123412341134, '99 W 15th');

INSERT INTO Customers (fname, lname, password, phone, email, creditcard, address)
VALUES ('Josh', 'Rimmen', 'letsgo', '8273729988', 'j@new.com', 9999444422224444, '12 UBC Ave.');
