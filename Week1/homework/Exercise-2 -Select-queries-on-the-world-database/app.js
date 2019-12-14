const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'new_world'
});

//Connect
db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('MySQL is connected...');
});

const app = express();

// What are the names of countries with population greater than 8 million?
app.get('/countries_with_population_greater_than_8_million', (req, res) => {
  let sql = `SELECT name FROM country WHERE population > 8000000`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Countries fetched');
  });
});

// What are the names of countries that have “land” in their names?
app.get('/countries_have_land_word_in_their_names', (req, res) => {
  let sql = `SELECT name FROM country WHERE name LIKE '%land%'`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Countries fetched');
  });
});

// What are the names of the cities with population in between 500,000 and 1 million?
app.get('/cities_with_population_between_500000_and_1000000', (req, res) => {
  let sql = `SELECT name FROM city WHERE population < 1000000 AND population > 500000`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Cities fetched');
  });
});

// What's the name of all the countries on the continent ‘Europe’?
app.get('/countries_on_continent_Europe', (req, res) => {
  let sql = `SELECT name FROM country WHERE continent='Europe'`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Countries fetched');
  });
});

// List all the countries in the descending order of their surface areas
app.get('/countries_in_descending_order_of_surface_areas', (req, res) => {
  let sql = `SELECT name, surfacearea FROM country ORDER BY surfacearea DESC`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Countries fetched');
  });
});

// What are the names of all the cities in the Netherlands?
app.get('/all_cities_in_Netherlands', (req, res) => {
  let sql = `SELECT name FROM city where countrycode = 'NLD'`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Cities fetched');
  });
});

// What is the population of Rotterdam?
app.get('/population_of_Rotterdam', (req, res) => {
  let sql = `SELECT population FROM city WHERE name = 'Rotterdam'`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Population fetched');
  });
});

// What's the top 10 countries by Surface Area?
app.get('/population_of_Rotterdam', (req, res) => {
  let sql = `SELECT population FROM city WHERE name = 'Rotterdam'`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Population fetched');
  });
});

// What's the top 10 countries by Surface Area?
app.get('/top_10_countries_by_Surface_Area', (req, res) => {
  let sql = `SELECT name FROM country ORDER BY surfacearea DESC LIMIT 10`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Countries fetched');
  });
});

// What's the top 10 most populated cities?
app.get('/top_10_most_populated_cities', (req, res) => {
  let sql = `SELECT name FROM city ORDER BY population DESC LIMIT 10`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('cities fetched');
  });
});

// What is the population number of the world?
app.get('/the_population_number_of_the_world', (req, res) => {
  let sql = `SELECT SUM(population) FROM country`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send(`World's population number fetched`);
  });
});


app.listen('3000', () => {
  console.log('Server started on port 3000');
});