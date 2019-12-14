const express = require('express');
const mysql = require('mysql');
const data = require('./data.js');

// Create connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'userdb'
});

//Connect
db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('MySQL is connected');
});

const app = express();

// Create Database
app.get('/company', (req, res) => {
  let sql = 'CREATE DATABASE company';
  db.query(sql, (err, result) => {
    if(err) {
      throw err;
    }
    console.log(result);
    res.send('Company database created');
  });
});

// Create tables

// Employees table
app.get('/company/createemployees', (req, res) => {
  let sql = 'CREATE TABLE employees (emp_no int NOT NULL, emp_name VARCHAR(255), salary int NOT NULL, reports_to VARCHAR(255))';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Employees table created');
  });
});

// Departments table
app.get('/createdepartments', (req, res) => {
  let sql = 'CREATE TABLE departments (dept_no int NOT NULL, dept_name VARCHAR(255) NOT NULL, manager int)';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Departments table created');
  });
});

// Projects table
app.get('/createprojects', (req, res) => {
  let sql = 'CREATE TABLE projects (porj_no int NOT NULL, proj_name VARCHAR(255), starting_date DATE NOT NULL, ending_date DATE NOT NULL)';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('projects table created');
  });
});

// Insert values to the tables

// Employees table
app.get('/company/addemployees', (req, res) => {
  let sql = 'INSERT INTO employees SET ?';
  data.employees.forEach(item => {
    db.query(sql, item, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Employees added');
    });
  });
});

// departments table
app.get('/company/adddepartments', (req, res) => {
  let sql = 'INSERT INTO departments SET ?';
  data.employees.forEach(item => {
    db.query(sql, item, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Departments added');
    });
  });
});

// Projects table
app.get('/company/addprojects', (req, res) => {
  let sql = 'INSERT INTO projects SET ?';
  data.employees.forEach(item => {
    db.query(sql, item, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Projects added');
    });
  });
});

// Get data from tables

// Employees table
app.get('/company/getemployees', (req, res) => {
  let sql = 'SELECT * FROM employees';
  db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send('employees fetched...');
  });
});

// Departments table
app.get('/company/getdepartments', (req, res) => {
  let sql = 'SELECT * FROM departments';
  db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send('Departments fetched...');
  });
});

// Employees table
app.get('/company/getprojects', (req, res) => {
  let sql = 'SELECT * FROM projects';
  db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send('Projects fetched...');
  });
});



app.listen('3000', () => {
  console.log('Server started on port 3000');
});