const { Schema, model } = require('mongoose')

const eventSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String },
  date: { type: String },
  place: { type: String },
  // Подумать над моделью тегов
  tags: [String]
})

module.exports = model('Event', eventSchema)
