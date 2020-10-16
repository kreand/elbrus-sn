const {Schema, model} = require('mongoose');

const employerSchema = new Schema({
  name: {type: String, required: true},
  rank: {type: Number},
  review: {type: String},
})

module.exports = model('Employer', employerSchema);
