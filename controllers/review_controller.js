const express = require('express');
const router = express.Router();
const { Review } = require('../models');
const seedData = require('./seed_data/review');

Review.deleteMany({}, (error, deletedReviews) => {
    if (error) return console.log(error);
    console.log(deletedReviews);
    Review.insertMany(seedData, (error, insertedReviews) => {
        if (error) return console.log(error);
        console.log('REVIEWS SEED COMPLETE:');
        console.log(insertedReviews);
        }
    );
});


router.get('/', (req, res) => {
    Review.find({}, (error, foundReviews) => {
        if (error) return console.log(error);
        res.render('reviews/index.ejs', { reviews: foundReviews });
    });
});

module.exports = router;