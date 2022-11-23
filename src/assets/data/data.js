require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);


const product = require('../../models/products.js');



const data = async () => {
  // ELECTRONICS
  await product.create({
    name: "Audio-Technica headphones",
    description: "Audio-Technica studio headphones",
    category: "electronics",
    price: 200,
    inventory: 200,
    image: 'https://i.imgur.com/nhmzJiu.jpg',
  });
  await product.create({
    name: "Macbook Pro",
    description: "Retina display 13-inch LED-backlit display with IPS technology.",
    category: "electronics",
    price: 2000,
    inventory: 200,
    image: 'https://images.pexels.com/photos/526895/pexels-photo-526895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  await product.create({
    name: "Sony Speaker",
    description: "Brown wooden framed Sony speaker",
    category: "electronics",
    price: 250,
    inventory: 50,
    image: 'https://images.pexels.com/photos/157534/pexels-photo-157534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  await product.create({
    name: "Audio Mixer",
    description: "Yamaha MG12XU Audio Mixer",
    category: "electronics",
    price: 500,
    inventory: 20,
    image: 'https://images.pexels.com/photos/6648188/pexels-photo-6648188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  await product.create({
    name: "Xbox Controller",
    description: "Custom White Limited Edition Xbox Controller",
    category: "electronics",
    price: 75,
    inventory: 100,
    image: 'https://images.pexels.com/photos/12719143/pexels-photo-12719143.jpeg?auto=compress&cs=tinysrgb&w=1600',
  });
  await product.create({
    name: "Ipad Pro",
    description: "Black Ipad Pro 250gb",
    category: "electronics",
    price: 999,
    inventory: 250,
    image: 'https://images.pexels.com/photos/3785868/pexels-photo-3785868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  // CLOTHING
  await product.create({
    name: "Hoodie",
    description: "Gray Pull-over Hoodie",
    category: "clothing",
    price: 50,
    inventory: 90,
    image: 'https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  await product.create({
    name: "T-Shirt",
    description: "Multi-color t-shirts",
    category: "clothing",
    price: 20,
    inventory: 1000,
    image: 'https://images.pexels.com/photos/4530791/pexels-photo-4530791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  await product.create({
    name: "Sneakers",
    description: "Nike Air Jordan Shoes",
    category: "clothing",
    price: 250,
    inventory: 200,
    image: 'https://images.pexels.com/photos/10738239/pexels-photo-10738239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  await product.create({
    name: "Hat",
    description: "Brown Fedora",
    category: "clothing",
    price: 50,
    inventory: 100,
    image: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  // OUTDOORS
  await product.create({
    name: "Tent",
    description: "Green REI Ultra Lightweight hiking tent",
    category: "outdoors",
    price: 150,
    inventory: 40,
    image: 'https://images.pexels.com/photos/14065005/pexels-photo-14065005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  await product.create({
    name: "Kayak",
    description: "Inflatable single person Kayak",
    category: "outdoors",
    price: 500,
    inventory: 100,
    image: 'https://images.pexels.com/photos/7508151/pexels-photo-7508151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  await product.create({
    name: "Knife",
    description: "Hunting Knife",
    category: "outdoors",
    price: 400,
    inventory: 15,
    image: 'https://images.pexels.com/photos/12749404/pexels-photo-12749404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  await product.create({
    name: "Hatchet",
    description: "Brown Hatchet",
    category: "outdoors",
    price: 175,
    inventory: 30,
    image: 'https://images.pexels.com/photos/4712552/pexels-photo-4712552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  
  console.log('Seeded database!');

  mongoose.disconnect();
};

data();