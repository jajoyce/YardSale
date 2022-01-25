require('../config/db.connection');

module.exports = {
    Product: require('./product_model'), 
    User: require('./user_model'), 
    Review: require('./review_model') 
};