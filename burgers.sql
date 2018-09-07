CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP DEFAULT now(),
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Cheese Burger');
INSERT INTO burgers (burger_name) VALUES ('Royale with Cheese');
INSERT INTO burgers (burger_name) VALUES ('Quarter Pounder');
INSERT INTO burgers (burger_name) VALUES ('Cheese Stuffed Lamb Burger');
