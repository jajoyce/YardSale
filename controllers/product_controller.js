const express = require('express');
const router = express.Router();
const { Product } = require('../models');
const seedData = require('./seed_data/product');

Product.deleteMany({}, (error, deletedProducts) => {
    if (error) return console.log(error);
    console.log(deletedProducts);
    Product.insertMany(seedData, (error, insertedProducts) => {
        if (error) return console.log(error);
        console.log('PRODUCTS SEED COMPLETE:');
        console.log(insertedProducts);
        }
    );
});


router.get('/', (req, res) => {
    Product.find({}, (error, foundProducts) => {
        if (error) return console.log(error);
        res.render('products/index.ejs', { products: foundProducts });
    });
});

router.get('/new', (req, res) => {
    res.render('products/new.ejs');
});

module.exports = router;