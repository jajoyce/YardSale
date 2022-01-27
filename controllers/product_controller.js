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

router.delete('/:productID', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.productID);
        console.log(deletedProduct);
    } catch (error) {
        console.log(error);
    }
    return res.redirect('/products');
});

router.get('/:productId/edit', async (req, res) => {
    try {
        const updatingProduct = await Product.findById(req.params.productId);
        console.log(updatingProduct);
        return res.render('products/edit.ejs', { product: updatingProduct })
    } catch (error) {
        console.log(error);
        return res.redirect('/products');
    }
});

router.put('/:productId', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body);
        console.log(updatedProduct);
        return res.redirect(`/products/${updatedProduct._id}`);
    } catch (error) {
        console.log(error);
        return res.redirect(`/products/${req.params.productId}`);
    }
});


module.exports = router;