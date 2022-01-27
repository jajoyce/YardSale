const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: [true, 'Product name is required.']
        }, 
        price: {
            type: Number, 
            min: [0, 'You cannot pay someone to take your product. Price cannot be negative.'], 
            required: [true, 'Product price is required.']
        }, 
        image: {
            type: String, 
            required: [true, 'You must provide an image of your product.']
        }, 
        description: {
            type: String, 
        }, 
        category: {
            type: String, 
            required: [true, 'You must provide a category for your product.']
        }, 
        sellerUser: {
            type: mongoose.Types.ObjectId,
            ref: 'User',    
        }, 
        sold: {
            type: Boolean, 
            default: false
        }, 
    }, 
    {
        timestamps: true, 
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;