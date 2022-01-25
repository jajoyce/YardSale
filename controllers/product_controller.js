const express = require('express');
const router = express.Router();
// const { Product } = require('../models');

router.get('/', (req, res) => {
    res.send('This is the Products page, up and running.');
});

module.exports = router;