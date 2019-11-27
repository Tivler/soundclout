const router = require('express').Router();
const Featured = require("../models/featured.model");
const Albums = require("../models/albums.model");
const Testimonial =  require("../models/testimonial.model");
const Contact = require("../models/contact.model");

router.get('/featuredalbums' , (req, res) => {
  Featured.find({})
    .then(featuredAlbum => res.json(featuredAlbum))
    .catch(err => res.send(err))
})

router.get('/testimonials' , (req, res) => {
  Testimonial.find({})
    .then(testimonial => res.json(testimonial))
    .catch(err => res.send(err))
})

router.get('/contacts' , (req, res) => {
  Contact.find({})
    .then(contact => res.json(contact))
    .catch(err => res.send(err))
})

router.get('/albums', (req, res) => {

  const sortBy = req.query.sortBy || null;
  const sortDir = req.query.sortDir || null;

  let q = Albums.find({});

  if (sortBy !== null && sortDir !== null) {
    q = q.sort({[sortBy]: sortDir})
  }
    q
    .then(albums => res.json(albums))
    .catch(err => res.send(err))
})

router.get('/albums/title/:title', (req, res) => {
  Albums.find({album_title: new RegExp('^'+req.params.title, 'i')})
    .then(albums => res.json(albums))
    .catch(err => res.send(err))
})

router.post('/submit', (req, res) => {
  const { firstName, lastName, email} = req.body;

  const c = new Contact({
    contact_firstName: firstName,
    contact_lastName: lastName,
    contact_email: email
  });

  c.save();
  res.json(c)
})

module.exports = router;