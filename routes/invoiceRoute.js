const express = require('express');
const { fetchAllInvoices, showInvoice, createInvoice, updateInvoice, deleteInvoice } = require('../controllers/invoiceController');

let router = express.Router();

router.get('/invoices',fetchAllInvoices);
router.get('/invoices/:id',showInvoice);
router.post('/invoices',createInvoice); //CREATE
router.post('/invoices/:id',updateInvoice); //UPDATE
router.delete('/invoices/:id',deleteInvoice); //DELETE

module.exports = router;