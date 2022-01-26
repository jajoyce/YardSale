const express = require('express');
const router = express.Router();
const { User } = require('../models');
const seedData = require('./seed_data/user');

User.deleteMany({}, (error, deletedUsers) => {
    if (error) return console.log(error);
    console.log(deletedUsers);
    User.insertMany(seedData, (error, insertedUsers) => {
        if (error) return console.log(error);
        console.log('USERS SEED COMPLETE:');
        console.log(insertedUsers);
        }
    );
});


router.get('/', (req, res) => {
    User.find({}, (error, foundUsers) => {
        if (error) return console.log(error);
        res.render('users/index.ejs', { users: foundUsers });
    });
});


module.exports = router;