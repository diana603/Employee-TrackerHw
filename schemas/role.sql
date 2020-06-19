DROP DATABASE IF EXISTS role;
CREATE DATABASE role; 
USE role; 

CREATE TABLE role_table (
    ID INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL, 
    salary decimal, 
    department_id INTEGER, 
    PRIMARY KEY(id)
);
