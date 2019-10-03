const router = require('express').Router();
const mysql = require('mysql');
const path = require('path')

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

// API
router.get('/', function (req, res) {
  res.send("Soundclout Database");
})

// fetch people for testimonials
router.get('/api/testimonials', (req, res) => {
  connection.query("SELECT * FROM testimonials", function(err, data){    
    if (err) throw err;
    res.json(data)
  })
})

// featured albums
router.get('/api/featuredalbums', function (req, res) {
    connection.query("SELECT * FROM featured_price INNER JOIN featured ON featured_price.featured_id = featured.featured_id", function(err, data){
        if (err) throw err;
        res.json(data)
    })
})

// fetch all products
router.get('/api/albums', (req, res) => {
  connection.query("SELECT * FROM album_price INNER JOIN albums ON album_price.album_id = albums.album_id", function(err, data){ 
    if (err) throw err;   
    res.json(data)
  })
})

// fetch all products from A to z
router.get('/api/namefromatoz', (req, res) => {
  connection.query("SELECT * FROM album_price INNER JOIN atoz ON album_price.album_id = atoz.album_id", function(err, data){
    if (err) throw err;    
    res.json(data)
  })
})

// fetch all products from Z to A
router.get('/api/namefromztoa', (req, res) => {
  connection.query("SELECT * FROM album_price INNER JOIN ztoa ON album_price.album_id = ztoa.album_id", function(err, data){
    if (err) throw err;    
    res.json(data)
  })
})

// filter all products by price lowest to highest
router.get('/api/pricelowtohigh', (req, res) => {
  connection.query("SELECT * FROM albums INNER JOIN price_up ON albums.album_id = price_up.album_id", function(err, data){
    if (err) throw err;    
    res.json(data)
  })
})

// filter all products by price from highest to lowest
router.get('/api/pricehightolow', (req, res) => {
  connection.query("SELECT * FROM albums INNER JOIN price_down ON albums.album_id = price_down.album_id", function(err, data){
    if (err) throw err;   
    res.json(data) 
  })
})

// Handle submit!!
router.post('/api/submit', (req, res) => {
  const { firstName, lastName, email} = req.body;
  console.log('test -------- ', req.body)
  const sqlQuery = `INSERT INTO contacts (firstName , lastName , email) VALUES (? , ? , ?)`;

  connection.query(sqlQuery, [firstName , lastName, email], function(err, data){  
    console.log(data);  
    if (err) throw err;
    res.send(data) 
  })
})

// View all contacts
router.get('/api/contacts', (req, res) => {
  connection.query("SELECT * FROM contacts", function(err, data){  
    console.log(data);  
    if (err) throw err;
    res.json(data) 
  })
})

// Handle Search Filter
router.get('/api/albums/title/:title' , (req , res) => {
  const { title } = req.params
  const sql = mysql.format(`SELECT * FROM album_price INNER JOIN albums ON album_price.album_id = albums.album_id WHERE 1 AND album_title LIKE ?` ,[`${title}%`])
  connection.query(sql, (err , data) => {
    if (err) throw err;
    res.send(data)
  })
})

module.exports = router;