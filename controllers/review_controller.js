const express = require('express');
const router = express.Router();
const { Review, User } = require('../models');


router.get('/', async (req, res) => {
    try {
        const foundReviews = await Review.find({}).populate('reviewedSellerUser');
        return res.render('reviews/index.ejs', { reviews: foundReviews });
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
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