const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth")

const { signup, signin, getUser, getUsers } = require('../controllers/usersController');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/userByEmail', getUser);
router.get('/users', getUsers);

module.exports = router;
