const express = require('express');
const router = express.Router();
const { Product } = require('../models');

router.get('/', (req, res) => {
    res.render('products/index.ejs');
});

router.get('/new', (req, res) => {
    res.render('products/new.ejs');
});

module.exports = router;