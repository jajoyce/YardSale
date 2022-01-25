const express = require('express');
const router = express.Router();
const { Review } = require('../models');

router.get('/', (req, res) => {
    res.render('reviews/index.ejs');
});

module.exports = router;