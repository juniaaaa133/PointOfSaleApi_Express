const Voucher = require('../models/voucher')

exports.fetchAllVouchers = (req,res) => {
    Voucher
    .find()
    .then((data) => {
        res.status(200).send(data);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.showVoucher = (req,res) => {
    let id = req.params.id;
    Voucher
    .findById(id)
    .then((data) => {
        res.status(200).send(data)
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.createVoucher = (req,res) => {
    let {
        code,
        productCode,
        productPrice,
        productQty,
        amount
    } = req.body;

             Voucher
            .create({
                code,
                productCode,
                productPrice,
                productQty,
                amount
            })
            .then((data)=> {
            res.status(201).send(data);
            res.end();
            })
            .catch((err) => {
                res.status(500).send(err);
            })
}

exports.updateVoucher = (req,res) => {
    let id = req.params.id;
    let {
        code,
        productCode,
        productPrice,
        productQty,
        amount
    } = req.body;

            Voucher
            .findById(id)
            .then((voucher) => {
                voucher.code = code;
                voucher.productCode = productCode;
                voucher.productPrice =  productPrice;
                voucher.productQty = productQty;
                voucher.amount = amount;
                return voucher.save();
            })
            .then((data) => {
                res.status(200).send(data);
                res.end();
            })
            .catch((err) => {
                res.status(500).send(err);
            })
}

exports.deleteVoucher = (req,res) => {
    let id = req.params.id;
    Voucher
    .findByIdAndDelete(id)
    .then(() => {
        res.sendStatus(204);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}