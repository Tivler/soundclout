require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Albums = require("../models/albums.model");
const uri = process.env.ATLAS_URI;
const app = express()
const PORT = process.env.port || 5000

//INSTANTIATE MIDDLEWARE

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(pino);
app.use(express.json());
app.use(helmet());
app.use(morgan());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  database: 'soundclout',
}, (err) =>{
  if(err){
    console.log(err)
  } else{
    console.log("database is connected")
  }
})


const router = require('./apiRoutes');

app.use('/api' , router)

// LAUNCH SERVER
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`)
})