const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testimonialSchema = new Schema ({
    testimonial_firstName : { type: String, required: true },
    testimonial_lastName : { type: String, required: true },
    testimonial_url : { type: String, required: true },
    testimonial_content : { type: String, required: true },
});

const Testimonial = mongoose.model('testimonials' , testimonialSchema);

module.exports = Testimonial;