const express = require('express');
const { fetchAllProducts, showProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

let router = express.Router();

router.get('/products',fetchAllProducts);
router.get('/products/:id',showProduct);
router.post('/products',createProduct); //CREATE
router.post('/products/:id',updateProduct); //UPDATE
router.delete('/products/:id',deleteProduct); //DELETE

module.exports = router;