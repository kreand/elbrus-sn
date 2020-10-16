const {Schema, model, Types} = require('mongoose');

const employerSchema = new Schema({
  name: {type: String, required: true},
  allReviews: [{
    user: {type: Types.ObjectId, ref: 'User'},
    rank: {type: Number},
    review: {type: String},
  }]
})

module.exports = model('Employer', employerSchema);
