const express = require('express');
const router = express.Router();
const { Product, User } = require('../models');


router.get('/', async (req, res) => {
    try {
        const foundProducts = await Product.find({}).populate('sellerUser');
        return res.render('products/index.ejs', { products: foundProducts });
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
});

router.get('/new', async (req, res) => {
    try {
        const defaultUser = await User.findOne({ seed_id: 1 });
        return res.render('products/new.ejs', {user: defaultUser});
    } catch (error) {
        console.log(error);
        return res.redirect('/products');
    }
});

router.get('/:productID', async (req, res) => {
    try {
        const foundProduct = await Product.findById(req.params.productID).populate('sellerUser');
        return res.render('products/show.ejs', { product: foundProduct});
    } catch (error) {
        console.log(error);
        return res.redirect('/products');
    }
});

router.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        console.log(`CREATED ${newProduct}`);
        return res.redirect(`/products/${newProduct._id}`);
    } catch (error) {
        console.log(error);
        return res.redirect('/products');
    }
});

module.exports = router;