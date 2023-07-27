const express=require('express')
const router = require.Router()
const {buat, buatPremission, ambilPremission, ubahPermission, hapusPermission} = require('../controller/permissionController')

router.post = ('/buatPermission' , buatPremission);
router.get = ('/ambilPermission' , ambilPremission);
router.patch = ('/ubahPermision' , ubahPermission);
router.delete = ('/hapusPermission' , hapusPermission);

module.exports = router