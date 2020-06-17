require('dotenv').config()
const mysql = require("mysql");
const inquirer = require("inquirer");

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

inquirer.prompt([
    {
        name: "action",
        message: "what would you like to do?",
        type: "list",
        choices: ["Add Departments", "View Departments", "Update Employee Roles"]
    }
]).then(answers => {
    //query employee schema 
    console.log(answers);
}).catch(error => {
    console.log(error);
});