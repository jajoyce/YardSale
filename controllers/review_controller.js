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


router.get('/new', (req, res) => {
    res.render('reviews/new.ejs');
});

router.get('/:reviewID', (req, res) => {
    Review.findById(req.params.reviewID, (error, foundReview) => {
        if (error) {
            console.log(error);
            return res.redirect('/reviews');
        };
        res.render('reviews/show.ejs', { review: foundReview});
    });
});


module.exports = router;