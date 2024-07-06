const express = require('express');
const { fetchAllShops, showShop, createShop, updateShop, deleteShop } = require('../controllers/shopController');

let router = express.Router();

router.get('/shops',fetchAllShops);
router.get('/shops/:id',showShop);
router.post('/shops',createShop); //CREATE
router.post('/shops/:id',updateShop); //UPDATE
router.delete('/shops/:id',deleteShop); //DELETE

module.exports = router;