const express = require('express');
const router = express.Router();
const { Product } = require('../models');

router.get('/', (req, res) => {
    res.render('products/index.ejs');
});

module.exports = router;