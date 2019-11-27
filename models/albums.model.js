const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumSchema = new Schema ({
    album_class: { type: String, required: true },
    album_title: { type: String, required: true },
    album_artist: { type: String, required: true },
    album_url: { type: String, required: true },
    album_price: { type: Number, required: true },
}, { collection: 'albums' });

const Albums = mongoose.model('Albums' , albumSchema);

module.exports = Albums;