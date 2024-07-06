const Staff = require('../models/staff')
const Role = require('../models/role')
const Gender = require('../models/gender')


exports.fetchAllStaffs = (req,res) => {
    Staff
    .find()
    .select('name role code email gender')
    .populate('role',"type")
    .populate('gender', "genderName")
    .then((data) => {
        res.status(200).send(data);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.showStaff = (req,res) => {
    let id = req.params.id;
    Staff
    .findById(id)
    .populate('role',"type")
    .populate('gender', "genderName")
    .then((data) => {
        res.status(200).send(data)
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.createStaff = (req,res) => {
    let {
        name,
        code,
        address,
        dateOfBirth,
        email,
        password,
        role,
        gender
    } = req.body;

     Role
    .find({code : role})
    .then((role) => {
    Gender
    .find({code : gender})
    .then((gender) => {
        console.log(gender,role)
    Staff
    .create({
        name,
        code,
        gender,
        role,
        address,
        dateOfBirth,
        email,
        password
    })
    .then((data)=>{
        res.status(201).send(data);
        res.end();
    })
    })
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.updateStaff = (req,res) => {
    let id = req.params.id;
    let {
        name,
        code,
        address,
        dateOfBirth,
        email,
        password,
        role,
        gender
    } = req.body;

     Role
    .find({code : role})
    .then((role) => {
    Gender
    .find({code : gender})
    .then((gender) => {
    Staff
    .findById(id)
    .then((staff) => {
       staff.name = name;
        staff.code = code;
        staff.gender = gender;
        staff.role = role;
        staff.address = address;
        staff.dateOfBirth = dateOfBirth;
        staff.email = email;
        staff.password = password
        return staff.save()
    })
    .then((data)=>{
        res.status(200).send(data);
        res.end();
    })
    })
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.deleteStaff = (req,res) => {
    let id = req.params.id;
    Staff
    .findByIdAndDelete(id)
    .then(() => {
        res.sendStatus(204);
        res.end();
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}