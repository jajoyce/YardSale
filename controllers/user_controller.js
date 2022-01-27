const express = require('express');
const router = express.Router();
const { User } = require('../models');


router.get('/', async (req, res) => {
    try {
        const foundUsers = await User.find({});
        return res.render('users/index.ejs', { users: foundUsers });
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
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