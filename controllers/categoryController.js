const Category = require("../models/category")

exports.fetchAllCategories = (req,res) => {
    Category
    .find()
    .then((data) => {
        res.status(200).send(data);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.showCategory = (req,res) => {
    let id = req.params.id;
    Category
    .findById(id)
    .then((data) => {
        res.status(200).send(data)
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.createCategory = (req,res) => {
    let {code,name} = req.body;
    console.log(req.body)
    return  Category
            .create({code,name})
            .then((data)=> {
            res.status(201).send(data);
            res.end();
            })
            .catch((err) => {
                res.status(500).send(err);
            })
}

exports.updateCategory = (req,res) => {
    let id = req.params.id;
    let {code,name} = req.body;

    Category
    .findById(id)
    .then((category) => {
        category.name = name;
        category.code = code;
        return category.save();
    })
    .then((data) => {
        res.status(200).send(data);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.deleteCategory = (req,res) => {
    let id = req.params.id;
    Category
    .findByIdAndDelete(id)
    .then((data) => {
        res.sendStatus(204);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}