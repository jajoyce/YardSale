const { User, Product, Review } = require('../../models');

async function seedAll() {
    try {
        const deletedUsers = await User.deleteMany({});
        const userSeedData = await require('./user');
        const insertedUsers = await User.insertMany(userSeedData);
        console.log(deletedUsers);
        console.log(`INSERTED ${insertedUsers.length} SEED USERS`);
        const deletedProducts = await Product.deleteMany({});
        const productSeedData = await require('./product');
        const insertedProducts = await Product.insertMany(productSeedData);
        console.log(deletedProducts);
        console.log(`INSERTED ${insertedProducts.length} SEED PRODUCTS`);
        const deletedReviews = await Review.deleteMany({});
        const reviewSeedData = await require('./review');
        const insertedReviews = await Review.insertMany(reviewSeedData);
        console.log(deletedReviews);
        console.log(`INSERTED ${insertedReviews.length} SEED REVIEWS`);
    } catch (error) {
        console.log(error);
    }
};


seedAll();

module.exports = "SEEDING DATA";