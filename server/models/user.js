const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  // status: student, teacher, guest, Gosha
  status: { type: String, default: 'guest' },
  coins: { type: Number, default: 0 },
  // rating: All coins for all time
  rating: { type: Number, default: 0 },
  skills: [String]
})

module.exports = model('User', userSchema)
