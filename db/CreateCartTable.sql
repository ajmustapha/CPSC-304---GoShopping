DROP TABLE IF EXISTS Cart;
CREATE TABLE Cart(
  cart_id SERIAL,
item_id INTEGER,
item_quantity INTEGER,
customer_id SERIAL,
PRIMARY KEY (cart_id, customer_id),
FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
FOREIGN KEY (item_id) REFERENCES Items(item_id));

INSERT INTO Cart (item_id, item_quantity, customer_id)
VALUES (1, 5, 1);
INSERT INTO Cart (item_id, item_quantity, customer_id)
VALUES (2, 3, 1);
INSERT INTO Cart (item_id, item_quantity, customer_id)
VALUES (3, 1, 2);
