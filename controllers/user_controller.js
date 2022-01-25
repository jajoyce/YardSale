const express = require('express');
const router = express.Router();
const { User } = require('../models');
const seedData = require('./seed_data/user');


router.get('/', (req, res) => {
    console.log('SEED DATA:');
    console.log(seedData);
    res.render('users/index.ejs');
});

module.exports = router;