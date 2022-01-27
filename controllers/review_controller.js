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

router.post('/', async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        console.log(`CREATED ${newReview}`);
        return res.redirect(`/reviews/${newReview._id}`);
    } catch (error) {
        console.log(error);
        return res.redirect('/reviews');
    }
});

router.get('/new', async (req, res) => {
    try {
        const defaultUser = await User.findOne({ seed_id: 1 });
        return res.render('reviews/new.ejs', {user: defaultUser});
    } catch (error) {
        console.log(error);
        return res.redirect('/reviews');
    }
});

router.get('/:reviewID', async (req, res) => {
    try {
        const foundReview = await Review.findById(req.params.reviewID).populate('reviewedSellerUser');
        return res.render('reviews/show.ejs', { review: foundReview});
    } catch (error) {
        console.log(error);
        return res.redirect('/reviews');
    }
});


module.exports = router;