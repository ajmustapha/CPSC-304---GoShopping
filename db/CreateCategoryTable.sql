DROP TABLE IF EXISTS Category;
CREATE TABLE Category(
  category_id SERIAL,
name VARCHAR(50) NOT NULL,
PRIMARY KEY (category_id));

INSERT INTO Category (name)
VALUES ('Clothes');

INSERT INTO Category (name)
VALUES ('Hats');

INSERT INTO Category (name)
VALUES ('Toiletries');

INSERT INTO Category (name)
VALUES ('Household');

INSERT INTO Category (name)
VALUES ('Electronics');
