DROP DATABASE IF EXISTS department;
CREATE DATABASE department; 
USE department; 

CREATE TABLE department_table (
    ID INTEGER NOT NULL AUTO_INCREMENT,
   name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

