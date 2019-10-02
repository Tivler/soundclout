require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const helmet = require('helmet');
const morgan = require('morgan');

const app = express()
const PORT = process.env.port || 4000

//INSTANTIATE MIDDLEWARE

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(pino);
app.use(express.json());
app.use(helmet());
app.use(morgan());

const router = require('./apiRoutes');

app.use('/' , router)
app.use('/api' , router)

// LAUNCH SERVER
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`)
})