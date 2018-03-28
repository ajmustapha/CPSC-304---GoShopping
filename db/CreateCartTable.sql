DROP TABLE IF EXISTS Cart;
CREATE TABLE Cart(
  cart_id SERIAL,
item_id INTEGER NOT NULL,
cart_quantity INTEGER NOT NULL,
customer_id INTEGER NOT NULL REFERENCES Customers(customer_id) ON DELETE CASCADE,
PRIMARY KEY (cart_id),
FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
FOREIGN KEY (item_id) REFERENCES Items(item_id)
CHECK (cart_quantity >= 0));

INSERT INTO Cart (item_id, cart_quantity, customer_id)
VALUES (1, 5, 1);
INSERT INTO Cart (item_id, cart_quantity, customer_id)
VALUES (2, 3, 1);
INSERT INTO Cart (item_id, cart_quantity, customer_id)
VALUES (3, 1, 2);
