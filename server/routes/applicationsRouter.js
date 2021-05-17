const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const auth = require("../middleware/auth")

const { getApplications, addApplication, updateApplication, deleteApplication } = require('../controllers/applicationsController')

//GET all applications
router.get('/', getApplications);

//ADD application
router.post('/', addApplication);

//UPDATE application
router.put("/:id", updateApplication);

//DELETE application
router.delete("/:id", deleteApplication);

module.exports = router;
