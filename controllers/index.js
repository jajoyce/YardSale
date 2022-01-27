const seedData = require('./seed_data');
console.log(seedData);

module.exports = {
    product: require('./product_controller'), 
    user: require('./user_controller'), 
    review: require('./review_controller')
};