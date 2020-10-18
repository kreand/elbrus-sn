const {Schema, model, Types} = require('mongoose');

const employerSchema = new Schema({
  name: {type: String, required: true, unique: true},
  rating: {type: String},
  allReviews: [{
    user: {type: Types.ObjectId, ref: 'User'},
    rating: {type: Number},
    review: {type: String},
  }]
})

module.exports = model('Employer', employerSchema);
