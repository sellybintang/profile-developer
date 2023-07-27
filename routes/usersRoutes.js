const express = require('express');
const router = express.Router();
const {register, login, ambilSemuaProfile} = require ('../controller/authController')
const {isAdmin, superAdmin, isUser} = require ('../middleware/authUsers')
// const {authPassword} = require ('../middleware/authPassword')


/* GET users listing. */
router.post('/register', register);
router.post('/login', login);
router.get('/semuaAkunUser', ambilSemuaProfile);
module.exports = router;
