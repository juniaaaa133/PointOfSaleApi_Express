const Shop = require('../models/shop')

exports.fetchAllShops = (req,res) => {
    Shop
    .find()
    .then((data) => {
        res.status(200).send(data);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.showShop = (req,res) => {
    let id = req.params.id;
    Shop
    .findById(id)
    .then((data) => {
        res.status(200).send(data)
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.createShop = (req,res) => {
    let {name,code,address,phoneNumber} = req.body;

             Shop
            .create({name,code,address,phoneNumber})
            .then((data)=> {
            res.status(201).send(data);
            res.end();
            })
            .catch((err) => {
                res.status(500).send(err);
            })
}

exports.updateShop = (req,res) => {
    let id = req.params.id;
    let {name,code,address,phoneNumber} = req.body;

            Shop
            .findById(id)
            .then((shop) => {
               shop.name = name;
               shop.code = code;
               shop.address = address;
               shop.phoneNumber = phoneNumber;
                return shop.save();
            })
            .then((data) => {
                res.status(200).send(data);
                res.end();
            })
            .catch((err) => {
                res.status(500).send(err);
            })
}

exports.deleteShop = (req,res) => {
    let id = req.params.id;
    Shop
    .findByIdAndDelete(id)
    .then(() => {
        res.sendStatus(204);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}