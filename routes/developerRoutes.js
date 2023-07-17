const express = require('express');
const router = express.Router();
const {
  createDeveloper, readAllDeveloper, readIdDeveloper, updateDeveloper, deleteDeveloper,
} = require('../controller/developerController')

/*developer listing.*/

router.post('/', createDeveloper);
router.get('/', readAllDeveloper );
router.get('/:id', readIdDeveloper);
router.put('/:id', updateDeveloper);
router.delete('/:id', deleteDeveloper)

module.exports = router;



