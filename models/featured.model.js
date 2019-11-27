const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const featuredSchema = new Schema ({
    featured_class : { type: String, required: true },
    featured_title : { type: String, required: true },
    featured_artist : { type: String, required: true },
    featured_url : { type: String, required: true },
    featured_price : { type: String, required: true }
});

const Featured = mongoose.model('featured_albums' , featuredSchema);

module.exports = Featured;