const express = require("express");
const login = require("../controllers/authorization/login");
const register = require("../controllers/authorization/register");
const { getUser, createUser } = require("../controllers/userController");
const router = express.Router();


router.get('/login', login);
router.post('/register', register);
// router.post('/createUser', createUser);

module.exports = router;