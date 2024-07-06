const express = require('express');
const { fetchAllGenders, showGender, createGender, updateGender, deleteGender } = require('../controllers/genderController');

let router = express.Router();

router.get('/genders',fetchAllGenders);
router.get('/genders/:id',showGender);
router.post('/genders',createGender); //CREATE
router.post('/genders/:id',updateGender); //UPDATE
router.delete('/genders/:id',deleteGender); //DELETE

module.exports = router;