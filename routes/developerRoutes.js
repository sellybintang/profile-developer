const express = require('express');
const router = express.Router();
const {
  buatDeveloper, ambilSemuaDeveloper, ambilDeveloper, ambilDeveloperByAdmin, cariDeveloper, editDeveloper, tambahPropertiDeveloper, hapusDeveloper, hapusPropertiDeveloper, 
} = require('../controller/developerController')
const upload=require('../middleware/multer')



/*developer listing.*/
router.post('/buatDeveloper', upload.single('logo'), buatDeveloper);
router.get('/ambilSemuaDeveloper', ambilSemuaDeveloper);
router.get('/ambilDataDeveloper/:id', ambilDeveloper);
router.get('/ambilDeveloperByAdmin/:admin_id', ambilDeveloperByAdmin);
router.get('/cariDeveloper', cariDeveloper);
router.put('/editDeveloper/:id', editDeveloper);
router.put('/tambahPropertiDeveloper/:id', tambahPropertiDeveloper);
router.delete('/hapusDeveloper/:id', hapusDeveloper);
router.put('/hapusPropertiDeveloper/:id', hapusPropertiDeveloper);

module.exports = router;



