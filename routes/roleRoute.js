const express = require('express');
const { fetchAllRoles, showRole, createRole, updateRole, deleteRole } = require('../controllers/roleController');

let router = express.Router();

router.get('/roles',fetchAllRoles);
router.get('/roles/:id',showRole);
router.post('/roles',createRole); //CREATE
router.post('/roles/:id',updateRole); //UPDATE
router.delete('/roles/:id',deleteRole); //DELETE

module.exports = router;