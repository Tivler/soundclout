const router = require('express').Router();
const mysql = require('mysql');

// DATABASE CONNECTION
console.log(process.env)
var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  // db port
  port: 3306, 
  user: "b4e0b50516c413",  
  password: process.env.MYPASSWORD,
  database: "heroku_b8aecbe04dd5bbf"
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
    res.send("Hello World")
})

// fetch people for testimonials
router.get('/testimonials', (req, res) => {
  connection.query("SELECT * FROM testimonials", function(err, data){    
    res.json(data)
  })
})

// featured albums
router.get('/featuredalbums', function (req, res) {
    connection.query("SELECT * FROM featured_price INNER JOIN featured ON featured_price.featured_id = featured.featured_id", function(err, data){
        res.json(data)
    })
})

// fetch all products
router.get('/albums', (req, res) => {
  connection.query("SELECT * FROM album_price INNER JOIN albums ON album_price.album_id = albums.album_id", function(err, data){    
    res.json(data)
  })
})

// fetch all products from A to z
router.get('/namefromatoz', (req, res) => {
  connection.query("SELECT * FROM album_price INNER JOIN atoz ON album_price.album_id = atoz.album_id", function(err, data){    
    res.json(data)
  })
})

// fetch all products from Z to A
router.get('/namefromztoa', (req, res) => {
  connection.query("SELECT * FROM album_price INNER JOIN ztoa ON album_price.album_id = ztoa.album_id", function(err, data){    
    res.json(data)
  })
})

// filter all products by price lowest to highest
router.get('/pricelowtohigh', (req, res) => {
  connection.query("SELECT * FROM albums INNER JOIN price_up ON albums.album_id = price_up.album_id", function(err, data){    
    res.json(data)
  })
})

// filter all products by price from highest to lowest
router.get('/pricehightolow', (req, res) => {
  connection.query("SELECT * FROM albums INNER JOIN price_down ON albums.album_id = price_down.album_id", function(err, data){    
    res.json(data) 
  })
})

// Handle submit!!
router.post('/submit', (req, res) => {
  const { firstName, lastName, email} = req.body;
  console.log('test -------- ', req.body)
  const sqlQuery = `INSERT INTO contacts (firstName , lastName , email) VALUES (? , ? , ?)`;

  connection.query(sqlQuery, [firstName , lastName, email], function(err, data){  
    console.log(data);  
    res.send(data) 
  })
})

// View all contacts
router.get('/contacts', (req, res) => {
  connection.query("SELECT * FROM contacts", function(err, data){  
    console.log(data);  
    res.json(data) 
  })
})

// Handle Search Filter
router.get('/albums/title/:title' , (req , res) => {
  const { title } = req.params
  const sql = mysql.format(`SELECT * FROM album_price INNER JOIN albums ON album_price.album_id = albums.album_id WHERE 1 AND album_title LIKE ?` ,[`${title}%`])
  connection.query(sql, (err , data) => {
    if (err) throw err;
    res.send(data)
  })
})

module.exports = router;