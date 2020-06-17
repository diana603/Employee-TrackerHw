DROP DATABASE IF EXISTS employee
CREATE DATABASE employee; 
USE employee; 

CREATE TABLE employee_table (
    ID INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30) NOT NULL, 
    last_name VARCHAR (30) NOT NULL, 
    role_id INTEGER, 
    manager_id INTEGER, 
    PRIMARY KEY(id)
)
