const Role = require('../models/role')

exports.fetchAllRoles = (req,res) => {
    Role
    .find()
    .then((data) => {
        res.status(200).send(data);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.showRole = (req,res) => {
    let id = req.params.id;
    Role
    .findById(id)
    .then((data) => {
        res.status(200).send(data)
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.createRole = (req,res) => {
    let {type,code} = req.body;

            Role
            .create({type,code})
            .then((data)=> {
            res.status(201).send(data);
            res.end();
            })
            .catch((err) => {
                res.status(500).send(err);
            })
}

exports.updateRole = (req,res) => {
    let id = req.params.id;
    let {type,code} = req.body;

            Role
            .findById(id)
            .then((role) => {
                role.type = type;
                role.code = code;
                return role.save();
            })
            .then((data) => {
                res.status(200).send(data);
                res.end();
            })
            .catch((err) => {
                res.status(500).send(err);
            })
}

exports.deleteRole = (req,res) => {
    let id = req.params.id;
    Role
    .findByIdAndDelete(id)
    .then(() => {
        res.sendStatus(204);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}