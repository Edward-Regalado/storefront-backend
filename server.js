'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3002; // 
const app = express();
app.use(cors());
app.use(express.json());


const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

// const Data = require('./src/assets/data/data.js');
const Products = require('./src/models/products');


app.get('/', handleGetAllItems);


async function handleGetAllItems(req, res) {
  try {
    const product = await Products.find();
    res.status(200).send(product);
  } catch (e) {
    console.error(e);
    res.status(400).send('no products available');
  }
}


app.get('/', (request, response) => {
  response.send('TESTING STOREFRONT!');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));