// installed required packages 
require('dotenv').config()
const mysql = require("mysql");
const inquirer = require("inquirer");
// created connection used .env 
const connection = mysql.createConnection({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});


connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
// inquirer questions 
inquirer.prompt([
    {
        name: "action",
        message: "what would you like to do?",
        type: "list",
        choices: ["Add Departments", "Add Roles", "Add Employees", "View Departments", "View Roles", "View Employees", "Update Employees"]
    }
]).then(answers => {
    connection.query("SELECT * FROM employee.employee_table ORDER BY id", function (err, results) {
        if (err) throw err;
        console.log(results);
    })
    console.log(answers);
}).catch(error => {
    console.log(error);
});

// in sql write insert to employees table. use data from mysql to pass through check out activity 9 ice cream activity look at lines 23-38 ? to insert parameters. 