
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const mysql =   require("mysql");
const helmet = require('helmet');
const morgan = require('morgan');

const app = express()
const PORT = process.env.port || 3001

//INSTANTIATE MIDDLEWARE

app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);
app.use(express.json());
app.use(helmet());
app.use(morgan());

// DATABASE CONNECTION
console.log(process.env)
var connection = mysql.createConnection({
  host: "localhost",
  // db port
  port: 3306, 
  user: "root",  
  password: process.env.MYPASSWORD,
  database: "soundclout_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.query("SELECT * FROM albums", function(err , data){
    console.log('Data has been loaded successfully')
  })  
});

// API LIST

// API
app.get('/', function (req, res) {
    res.send("Hello World"); 
})

// fetch people for testimonials
app.get('/contacts', (req, res) => {
  connection.query("SELECT * FROM contacts", function(err, data){    
    res.json(data) 
  })
})

// featured albums
app.get('/feature', function (req, res) {
    connection.query("SELECT * FROM featured_price INNER JOIN featured ON featured_price.featured_id = featured.featured_id", function(err, data){
        res.json(data) 
    })
})

// fetch all products
app.get('/products', (req, res) => {
  connection.query("SELECT * FROM album_price INNER JOIN albums ON album_price.album_id = albums.album_id", function(err, data){    
    res.json(data) 
  })
})

// fetch all products from A to z
app.get('/atoz', (req, res) => {
  connection.query("SELECT * FROM album_price INNER JOIN atoz ON album_price.album_id = atoz.album_id", function(err, data){    
    res.json(data) 
  })
})

// fetch all products from Z to A
app.get('/ztoa', (req, res) => {
  connection.query("SELECT * FROM album_price INNER JOIN ztoa ON album_price.album_id = ztoa.album_id", function(err, data){    
    res.json(data) 
  })
})

// filter all products by price lowest to highest
app.get('/lowtohigh', (req, res) => {
  connection.query("SELECT * FROM albums INNER JOIN price_up ON albums.album_id = price_up.album_id", function(err, data){    
    res.json(data) 
  })
})

// filter all products by price from highest to lowest
app.get('/hightolow', (req, res) => {
  connection.query("SELECT * FROM albums INNER JOIN price_down ON albums.album_id = price_down.album_id", function(err, data){    
    res.json(data) 
  })
})

// Handle submit!!
app.post('/submit', (req, res) => {
  connection.query("INSERT INTO subscriber VALUES ('formDatafirstName', 'formDatalastName', 'formDataemail');", function(err, data){  
    console.log(data);  
    res.json(data) 
  })
})

// LAUNCH SERVER
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`)
})