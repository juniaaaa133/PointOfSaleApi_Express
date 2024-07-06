const express = require('express');
const { fetchAllVouchers, showVoucher, createVoucher, updateVoucher, deleteVoucher } = require('../controllers/voucherController');

let router = express.Router();

router.get('/vouchers',fetchAllVouchers);
router.get('/vouchers/:id',showVoucher);
router.post('/vouchers',createVoucher); //CREATE
router.post('/vouchers/:id',updateVoucher); //UPDATE
router.delete('/vouchers/:id',deleteVoucher); //DELETE

module.exports = router;