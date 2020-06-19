DROP DATABASE IF EXISTS employee;
CREATE DATABASE employee; 
USE employee; 

CREATE TABLE employee_table (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30) NOT NULL, 
    last_name VARCHAR (30) NOT NULL, 
    role_id INTEGER, 
    manager_id INTEGER, 
    PRIMARY KEY(id)
);
    INSERT INTO employee_table () VALUES (1, "diana","zsigray",11, 22);
    INSERT INTO employee_table () VALUES (2, "diana2","zsigray2",12, 23);
    INSERT INTO employee_table () VALUES (3, "diana3","zsigray3",13, 24);
    