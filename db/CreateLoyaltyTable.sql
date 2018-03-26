DROP TABLE IF EXISTS Loyalty;
CREATE TABLE Loyalty(
    customer_id SERIAL,
  points INTEGER,
  PRIMARY KEY (customer_id),
  FOREIGN KEY (customer_id) REFERENCES Customers(customer_id));

  INSERT INTO Loyalty (points)
  VALUES (0);

  INSERT INTO Loyalty (points)
  VALUES (100);

  INSERT INTO Loyalty (points)
  VALUES (10000);
