const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  inventory: Number,
  image: String,
});

const PRODUCT = mongoose.model('product', productSchema);

module.exports = PRODUCT;