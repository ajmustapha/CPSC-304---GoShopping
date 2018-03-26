DROP TABLE IF EXISTS Warehouse;
CREATE TABLE Warehouse(
    warehouse_id SERIAL,
  address VARCHAR(50),
  PRIMARY KEY (warehouse_id));

INSERT INTO Warehouse (address)
VALUES ('123 Warehouse Avenue');

INSERT INTO Warehouse (address)
VALUES ('222 Boulder Street');

INSERT INTO Warehouse (address)
VALUES ('9923 Big Buildings');

INSERT INTO Warehouse (address)
VALUES ('334 Small Street');

INSERT INTO Warehouse (address)
VALUES ('2231 Empty Lane');
