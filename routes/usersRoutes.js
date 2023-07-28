const express = require('express');
const router = express.Router();
const {register, login, ambilSemuaProfile} = require ('../controller/authController')
const {isAdmin, superAdmin, isUser, authorize} = require ('../middleware/authUsers')
const {buatPremission, ambilPremission, ubahPermission, hapusPermission, authorizeEndpoint} = require('../controller/permissionController')
// const {authPassword} = require ('../middleware/authPassword')



/* GET users listing. */
router.post('/register', register);
router.post('/login', login);
router.get('/semuaAkunUser', authorize, ambilSemuaProfile);

// Permissions
router.post('/buatPermission',authorize,buatPremission);
router.get('/ambilPermission' , authorize, ambilPremission);
router.patch('/ubahPermission/:id_permission', authorize, ubahPermission);
router.delete('/hapusPermission/:id_permission', authorize, hapusPermission);

router.post('/authorize', authorizeEndpoint)

module.exports = router