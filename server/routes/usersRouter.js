const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth")

const { signup, signin, getUser, editProfil } = require('../controllers/usersController');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/getuser', getUser);
router.put('/edituser', editProfil);

module.exports = router;