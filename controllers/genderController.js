const Gender = require('../models/gender')

exports.fetchAllGenders = (req,res) => {
    Gender
    .find()
    .then((data) => {
        res.status(200).send(data);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.showGender = (req,res) => {
    let id = req.params.id;
    Gender
    .findById(id)
    .then((data) => {
        res.status(200).send(data)
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.createGender = (req,res) => {
    let {genderName,code} = req.body;

            Gender
            .create({genderName,code})
            .then((data)=> {
            res.status(201).send(data);
            res.end();
            })
            .catch((err) => {
                res.status(500).send(err);
            })
}

exports.updateGender = (req,res) => {
    let id = req.params.id;
    let {genderName,code} = req.body;

            Gender
            .findById(id)
            .then((gender) => {
                gender.genderName = genderName;
                gender.code = code;
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

exports.deleteGender = (req,res) => {
    let id = req.params.id;
    Gender
    .findByIdAndDelete(id)
    .then(() => {
        res.sendStatus(204);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}