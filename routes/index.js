const express = require('express');
const router = express.Router();
const developerRoutes=require('./developerRoutes');

/* GET developer. */
router.use('/api', developerRoutes)

module.exports = router