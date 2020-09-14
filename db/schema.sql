### Schema

DROP DATABASE IF EXISTS Yum_Burgers;

CREATE DATABASE Yum_Burgers;
USE Yum_Burgers;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured boolean NOT NULL,

	PRIMARY KEY (id)
);
