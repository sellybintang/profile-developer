const express = require('express');
const router = express.Router();
const {
  createDeveloper, readAllDeveloper, readIdDeveloper, updateDeveloper, deleteDeveloper,
} = require('../controller/developerController')

/*developer listing.*/

router.post('/buatDeveloper', createDeveloper);
router.get('/ambilSemuaDeveloper', readAllDeveloper);
router.get('/ambilDataDeveloper/:id', readIdDeveloper);
router.put('/editDeveloper/:id', updateDeveloper);
router.delete('/hapusDeveloper/:id', deleteDeveloper)
// router.delete('/hapusDeveloper/:id', deleteDeveloper)
module.exports = router;



