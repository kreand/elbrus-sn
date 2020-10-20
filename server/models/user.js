const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  // status: student, teacher, guest, Gosha
  status: { type: String, default: 'guest' },
  group: { type: String },
  coins: { type: Number, default: 0 },
  // rating: All coins for all time
  rating: { type: Number, default: 0 },
  skills: [String],
  history: [{
    count: Number,
    comment: String, // дописать имя  того админа, который изменил
    date: Date,
  }],
});

module.exports = model('User', userSchema);
