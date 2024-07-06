const express = require('express');
const { fetchAllStaffs, showStaff, createStaff, updateStaff, deleteStaff } = require('../controllers/staffController');

let router = express.Router();

router.get('/staffs',fetchAllStaffs);
router.get('/staffs/:id',showStaff);
router.post('/staffs',createStaff); //CREATE
router.post('/staffs/:id',updateStaff); //UPDATE
router.delete('/staffs/:id',deleteStaff); //DELETE

module.exports = router;