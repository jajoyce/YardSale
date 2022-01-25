const express = require('express');
const router = express.Router();
// const { User } = require('../models');

router.get('/', (req, res) => {
    res.send('This is the Users page, up and running.');
});

module.exports = router;