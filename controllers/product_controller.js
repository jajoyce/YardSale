const express = require('express');
const router = express.Router();
const { Product } = require('../models');
const seedData = require('./seed_data/product');

router.get('/', (req, res) => {
    console.log('SEED DATA:');
    console.log(seedData);
    res.render('products/index.ejs');
});

router.get('/new', (req, res) => {
    res.render('products/new.ejs');
});

module.exports = router;