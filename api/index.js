require('dotenv').config()
const express = require('express')
const mysql =   require("mysql");
const cors =  require('cors');

const app = express()
const PORT = 3000

////////////////////////////////////
//   instantiate middleware    ////
//////////////////////////////////

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

////////////////////////////////////
//  create database connection ////
//////////////////////////////////
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
  connection.query("SELECT * FROM albums", function(err, data){
    console.table(data)  
  })  
});

////////////////////////////////////
////       api catalogue       ////
//////////////////////////////////

// index page
app.get('/', function (req, res) {
    connection.query("SELECT * FROM featured", function(err, data){    
        console.log(data)
        res.json(data) 
    })
})

// fetch all products
app.get('/products', (req, res) => {
  connection.query("SELECT * FROM albums", function(err, data){    
    console.log(data)
    res.json(data) 
  })
})

////////////////////////////////////
/////       Launch Server      ////
//////////////////////////////////
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`)
})