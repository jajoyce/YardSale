const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        rating: {
            type: Number, 
            min: [1, 'Rating must be from 1 to 5 stars.'], 
            max: [5, 'Rating must be from 1 to 5 stars.'], 
            required: [true, 'Rating is required.']
        }, 
        title: {
            type: String, 
            required: [true, 'Review title is required.']
        }, 
        content: {
            type: String, 
        }, 
        reviewedSellerUser: {
            type: mongoose.Types.ObjectId,
            ref: 'User',    
        }, 
        reviewingBuyerUser: {
            type: mongoose.Types.ObjectId,
            ref: 'User',    
        }, 
    }, 
    {
        timestamps: true, 
    }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;