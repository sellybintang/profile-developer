const express = require('express');
const router = express.Router();
const {register, login, whoami} = require ('../controller/authController')
const {isAdmin, superAdmin, isUser, authorize} = require ('../middleware/authUsers')
// const {authPassword} = require ('../middleware/authPassword')

/* GET users listing. */
router.post('/register', register);
router.post('/login', login);

router.get('/whoami', authorize, whoami)

module.exports = router;
