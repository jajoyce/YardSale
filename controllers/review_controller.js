const express = require('express');
const router = express.Router();
// const { Review } = require('../models');

router.get('/', (req, res) => {
    res.send('This is the Reviews page, up and running.');
});

module.exports = router;