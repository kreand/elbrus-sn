const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  photo: {
    type: String,
    default:
      'https://res.cloudinary.com/elbrus-coding-bootcamp/image/upload/v1603361614/images/impg2ijecm9ajxdwypbe.png',
  },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  status: { type: String, default: 'Гость' },
  group: { type: String, default: '' },
  coins: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  contacts: { type: String, default: '' },
  skills: [String],
  history: [
    {
      count: Number,
      comment: String,
      date: Date,
    },
  ],
});

module.exports = model('User', userSchema);
