const { Schema, model } = require('mongoose');

const employerSchema = new Schema({
  name: { type: String, required: true, unique: true },
  rating: { type: Number },
  allReviews: [{
    userName: { type: String },
    userId: { type: String },
    rating: { type: Number },
    review: { type: String },
    date: { type: Date, default: Date.now() },
  }],
});

module.exports = model('Employer', employerSchema);
