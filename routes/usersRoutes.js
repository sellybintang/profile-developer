const express = require('express');
const router = express.Router();
const {register} = require ('../controller/authController')
const {isAdmin, superAdmin, isUser} = require ('../middleware/authUsers')
// const {authPassword} = require ('../middleware/authPassword')


/* GET users listing. */
router.post('/register', register);
router.post('/login', register);
router.post('/register', register);
module.exports = router;
