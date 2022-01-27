const userSeedData = require('./user');
const productSeedData = require('./product');
const reviewSeedData = require('./review');
const { User, Product, Review } = require('../../models');

function seedUser() {
    User.deleteMany({}, (error, deletedUsers) => {
        if (error) return console.log(error);
        console.log(deletedUsers);
        User.insertMany(userSeedData, (error, insertedUsers) => {
            if (error) return console.log(error);
            console.log('USERS SEED COMPLETE:');
            // console.log(insertedUsers);
            seedProduct();
            seedReview();
        });
    });   
};

function seedProduct() {
    Product.deleteMany({}, (error, deletedProducts) => {
        if (error) return console.log(error);
        console.log(deletedProducts);
        Product.insertMany(productSeedData, (error, insertedProducts) => {
            if (error) return console.log(error);
            console.log('PRODUCTS SEED COMPLETE:');
            // console.log(insertedProducts);
        });
    });
};

function seedReview() {
    Review.deleteMany({}, (error, deletedReviews) => {
        if (error) return console.log(error);
        console.log(deletedReviews);
        Review.insertMany(reviewSeedData, (error, insertedReviews) => {
            if (error) return console.log(error);
            console.log('REVIEWS SEED COMPLETE:');
            // console.log(insertedReviews);
        });
    });
};

seedUser();

module.exports = "SEEDING DATA";