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

router.get('/:userID', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.userID);
        return res.render('users/show.ejs', { user: foundUser});
    } catch (error) {
        console.log(error);
        return res.redirect('/users');
    }
});

router.get('/:userId/edit', async (req, res) => {
    try {
        const updatingUser = await User.findById(req.params.userId);
        console.log(updatingUser);
        return res.render('users/edit.ejs', { user: updatingUser })
    } catch (error) {
        console.log(error);
        return res.redirect('/users');
    }
});


module.exports = router;