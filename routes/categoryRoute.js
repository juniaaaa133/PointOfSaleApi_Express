const express = require('express');
const { fetchAllCategories, showCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');

let router = express.Router();

router.get('/categories',fetchAllCategories);
router.get('/categories/:id',showCategory);
router.post('/categories',createCategory); //CREATE
router.post('/categories/:id',updateCategory); //UPDATE
router.delete('/categories/:id',deleteCategory); //DELETE

module.exports = router;