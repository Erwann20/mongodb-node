const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const auth = require("../middleware/auth")

const { getContacts, addContact, deleteContact } = require('../controllers/contactsController')

//GET all applications
router.get('/', auth, getContacts);

//ADD application
router.post('/', addContact);

//DELETE application
router.delete("/:id", deleteContact);

module.exports = router;