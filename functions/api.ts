const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const api = express();
const port = 3001;
const router = express.Router();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const products = [
  { id: 1, name: "iPhone 13 Pro", price: 999, category: "Phones" },
  { id: 2, name: "Samsung Galaxy S21", price: 799, category: "Phones" },
  { id: 3, name: "MacBook Air", price: 1299, category: "Laptops" },
  { id: 4, name: "Dell XPS 13", price: 1199, category: "Laptops" },
  { id: 5, name: "Sony WH-1000XM4", price: 349, category: "Headphones" },
  {
    id: 6,
    name: "Bose QuietComfort 35 II",
    price: 299,
    category: "Headphones",
  },
  { id: 7, name: "Samsung QLED 4K TV", price: 899, category: "TVs" },
  { id: 8, name: "LG OLED 4K TV", price: 1299, category: "TVs" },
  { id: 9, name: "Amazon Echo Dot", price: 49, category: "Smart Home" },
  {
    id: 10,
    name: "Google Nest Thermostat",
    price: 199,
    category: "Smart Home",
  },
  { id: 11, name: "iPhone 12", price: 799, category: "Phones" },
  { id: 12, name: "MacBook Pro 13", price: 1499, category: "Laptops" },
  { id: 13, name: "Sony WF-1000XM4", price: 249, category: "Headphones" },
  { id: 14, name: "Samsung The Frame 4K TV", price: 1099, category: "TVs" },
  {
    id: 15,
    name: "Philips Hue Starter Kit",
    price: 99,
    category: "Smart Home",
  },
  { id: 16, name: "Google Pixel 6", price: 699, category: "Phones" },
  {
    id: 17,
    name: "Lenovo ThinkPad X1 Carbon",
    price: 1399,
    category: "Laptops",
  },
  { id: 18, name: "Sony WH-1000XM3", price: 299, category: "Headphones" },
  { id: 19, name: "LG OLED 8K TV", price: 2499, category: "TVs" },
  { id: 20, name: "Amazon Echo Show", price: 89, category: "Smart Home" },
  { id: 21, name: "OnePlus 9 Pro", price: 799, category: "Phones" },
  { id: 22, name: "HP Spectre x360", price: 1299, category: "Laptops" },
  { id: 23, name: "Bose SoundLink II", price: 199, category: "Headphones" },
  { id: 24, name: "Sony Bravia 4K TV", price: 799, category: "TVs" },
  { id: 25, name: "Nest Cam Indoor", price: 179, category: "Smart Home" },
  { id: 26, name: "Google Pixel 5a", price: 449, category: "Phones" },
  { id: 27, name: "Asus ROG Zephyrus G14", price: 1599, category: "Laptops" },
  { id: 28, name: "JBL Quantum 800", price: 149, category: "Headphones" },
  { id: 29, name: "Samsung QLED 8K TV", price: 3299, category: "TVs" },
  { id: 30, name: "Ring Video Doorbell", price: 99, category: "Smart Home" },
  { id: 31, name: "OnePlus Nord 2", price: 399, category: "Phones" },
  {
    id: 32,
    name: "Microsoft Surface Laptop 4",
    price: 1199,
    category: "Laptops",
  },
  { id: 33, name: "Sony WH-CH710N", price: 149, category: "Headphones" },
  { id: 34, name: "TCL 6-Series 4K TV", price: 699, category: "TVs" },
  {
    id: 35,
    name: "Ecobee SmartThermostat",
    price: 249,
    category: "Smart Home",
  },
  { id: 36, name: "Xiaomi Mi 11", price: 699, category: "Phones" },
  { id: 37, name: "Acer Swift 3", price: 699, category: "Laptops" },
  { id: 38, name: "Beats Solo Pro", price: 299, category: "Headphones" },
  { id: 39, name: "Sony X900H 4K TV", price: 899, category: "TVs" },
  { id: 40, name: "Nest Hello Doorbell", price: 229, category: "Smart Home" },
  { id: 41, name: "iPhone 13", price: 799, category: "Phones" },
  { id: 42, name: "Dell Inspiron 15", price: 599, category: "Laptops" },
  { id: 43, name: "Sony WH-CH700N", price: 129, category: "Headphones" },
  { id: 44, name: "Samsung QLED 4K TV", price: 799, category: "TVs" },
  // Continue adding more products as needed to reach a total of 40.
];

api.use(cors(corsOptions));

router.get("/products", (req, res) => {
  setTimeout(() => {
    res.json(products);
  }, 2000);
});

api.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

api.use("/.netlify/functions/api", router);

module.exports.handler = serverless(api);
