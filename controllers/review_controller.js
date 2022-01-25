const express = require('express');
const router = express.Router();
const { Review } = require('../models');
const seedData = require('./seed_data/review');


router.get('/', (req, res) => {
    console.log('SEED DATA:');
    console.log(seedData);
    res.render('reviews/index.ejs');
});

module.exports = router;