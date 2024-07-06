const Category = require("../models/category");
const Product = require("../models/product")

exports.fetchAllProducts = (req,res) => {
    Product
    .find()
    .populate('category',"name")
    .then((data) => {
        res.status(200).send(data);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.showProduct = (req,res) => {
    let id = req.params.id;
    Product
    .findById(id)
    .populate('category',"name")
    .then((data) => {
        res.status(200).send(data)
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.createProduct = (req,res) => {
    let {
        name,
        code,
        price,
        category
    } = req.body;

     Category
    .find({code : category})
    .then((category) => {
    return Product
          .create({name,code,price,category})
    })
    .then((data)=> {
     res.status(201).send(data);
     res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })

}

exports.updateProduct = (req,res) => {
    let id = req.params.id;
    let {
        name,
        code,
        price,
        category
    } = req.body;

           Category
           .find({code : category})
           .then((category) => {
            Product
            .findById(id)
            .then((product) => {
                product.name = name;
                product.code = code;
                product.price = price;
                product.category = category;
                return product.save();
            })
           })
            .then((data) => {
                res.status(200).send(data);
                res.end();
            })
            .catch((err) => {
                res.status(500).send(err);
            })
}

exports.deleteProduct = (req,res) => {
    let id = req.params.id;
    Product
    .findByIdAndDelete(id)
    .then((data) => {
        res.sendStatus(204);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}