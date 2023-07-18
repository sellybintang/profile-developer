const express = require('express');
const router = express.Router();
const {
  buatDeveloper, ambilSemuaDeveloper, ambilDeveloper, ambilDeveloperByAdmin, cariDeveloper, editDeveloper, tambahPropertiDeveloper, hapusDeveloper, hapusPropertiDeveloper,  
} = require('../controller/developerController')

/*developer listing.*/
router.post('/buatDeveloper', buatDeveloper);
router.get('/ambilSemuaDeveloper', ambilSemuaDeveloper);
router.get('/ambilDataDeveloper/:id', ambilDeveloper);
// router.get('/ambilDeveloperByAdmin/:admin_id', ambilDeveloperByAdmin)
// router.get('/cariDeveloper/:id', cariDeveloper);
router.put('/editDeveloper/:id', editDeveloper);
// router.put('/tambahPropertiDeveloper/:id', tambahPropertiDeveloper);
router.delete('/hapusDeveloper/:id', hapusDeveloper);
// router.delete('/hapusPropertiDeveloper/:id', hapusPropertiDeveloper);

module.exports = router;



