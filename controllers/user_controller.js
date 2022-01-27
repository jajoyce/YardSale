const express = require('express');
const router = express.Router();
const { User } = require('../models');


router.get('/', (req, res) => {
    User.find({}, (error, foundUsers) => {
        if (error) return console.log(error);
        res.render('users/index.ejs', { users: foundUsers });
    });
});

router.get('/:userID', (req, res) => {
    User.findById(req.params.userID, (error, foundUser) => {
        if (error) {
            console.log(error);
            return res.redirect('/users');
        };
        res.render('users/show.ejs', { user: foundUser});
    });
});

module.exports = router;