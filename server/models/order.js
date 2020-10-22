const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  product: { type: Object },
  buyer: { type: Object },
});

module.exports = model('Order', orderSchema);
