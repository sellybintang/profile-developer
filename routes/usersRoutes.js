const express = require('express');
const router = express.Router();
const {register} = require ('../controller/auth')
const {isAdmin, superAdmin, isUser} = require ('../middleware/authUsers')
// const {authPassword} = require ('../middleware/authPassword')


/* GET users listing. */
router.post('/userMember/register', register);

module.exports = router;
