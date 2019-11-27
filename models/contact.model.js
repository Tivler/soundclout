const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema ({
    contact_firstName : { type: String, required: true },
    contact_lastName : { type: String, required: true },
    contact_email : { type: String, required: true },
});

const Contact = mongoose.model('contacts' , contactSchema);

module.exports = Contact;