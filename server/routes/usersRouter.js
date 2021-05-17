const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth")

const { signup, signin, getUser } = require('../controllers/usersController');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/user', auth, getUser);

module.exports = router;