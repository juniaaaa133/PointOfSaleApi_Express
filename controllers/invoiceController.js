const Invoice = require('../models/invoice')
const Staff = require('../models/staff')

exports.fetchAllInvoices = (req,res) => {
    Invoice
    .find()
    .then((data) => {
        res.status(200).send(data);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.showInvoice = (req,res) => {
    let id = req.params.id;
    Invoice
    .findById(id)
    .then((data) => {
        res.status(200).send(data)
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.createInvoice = (req,res) => {
    let {
        dateTime,
        voucherNo,
        totalAmount,
        discount,
        staffCode,
        tax,
        paymentMethod,
        paymentAmount,
        receivedAmount,
        changeAmount,
        customerAccountNo
    } = req.body;

    
            Invoice
            .create({
                dateTime,
                voucherNo,
                totalAmount,
                discount,
                staffCode,
                tax,
                paymentMethod,
                paymentAmount,
                receivedAmount,
                changeAmount,
                customerAccountNo
            })
            .then((data)=> {
            res.status(201).send(data);
            res.end();
            })
            .catch((err) => {
                res.status(500).send(err);
            })
}

exports.updateInvoice = (req,res) => {
    let id = req.params.id;
    let {
        dateTime,
        voucherNo,
        totalAmount,
        discount,
        staffCode,
        tax,
        paymentMethod,
        paymentAmount,
        receivedAmount,
        changeAmount,
        customerAccountNo
    } = req.body;

        Invoice
        .findById(id)
        .then((invoice) => {
            invoice.dateTime = dateTime;
            invoice.voucherNo = voucherNo;
            invoice.totalAmount = totalAmount;
            invoice.discount = discount;
            invoice.staffCode = staffCode;
            invoice.tax = tax;
            invoice.paymentMethod = paymentMethod;
            invoice.paymentAmount = paymentAmount;
            invoice.receivedAmount = receivedAmount;
            invoice.changeAmount = changeAmount;
            invoice.customerAccountNo = customerAccountNo
           return gender.save();
        })
        .then((data) => {
             res.status(200).send(data);
            res.end();
        })
        .catch((err) => {
                res.status(500).send(err);
        })
}

exports.deleteInvoice = (req,res) => {
    let id = req.params.id;
    Invoice
    .findByIdAndDelete(id)
    .then(() => {
        res.sendStatus(204);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}