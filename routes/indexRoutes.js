const express = require('express');
const router = express.Router();
const usersRoutes = require ('./usersRoutes')

/* GET home page. */
router.use('/users', usersRoutes)


module.exports = router;
