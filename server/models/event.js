const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true, default: 'warning' },
  group: { type: String, required: true, default: 'public' },
  format: { type: String, required: true },
  city: { type: String },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  day: { type: Number, required: true },
  time: { type: String, required: true },
  body: { type: String, required: true },
  tags: [String],
});

module.exports = model('Event', eventSchema);
