DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL, 
	department_name VARCHAR(255),
	price FLOAT(8,2) NOT NULL,
	stock_quantity INT,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Stainless Steel Saucepan','Kitchen',19.99,50);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Soup Ladle','Kitchen',5.99,24);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Lawn Mower','Outdoor',249.99,10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Shiny Red Stapler','Office',5.99,120);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Pencils, Pack of 50','Office',2.99,99);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('iPod Classic','Electronics',499.95,12);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Vinyl Record Player','Electronics',149.99,7);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Camo Hat','Clothing',14.99,77);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Underwear, 5-pack','Clothing',19.99,49);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('The Life of Pi','Books',7.99,140);
