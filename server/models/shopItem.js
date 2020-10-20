const { Schema, model } = require('mongoose');

const shopItemSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  quantity: { type: Number, required: true },
});

module.exports = model('ShopItem', shopItemSchema);
