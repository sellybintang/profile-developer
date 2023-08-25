const express = require("express");
const router = express.Router();
const {
  buatDeveloper,
  ambilSemuaDeveloper,
  ambilDeveloper,
  ambilDeveloperByAdmin,
  cariDeveloper,
  editDeveloper,
  tambahPropertiDeveloper,
  hapusDeveloper,
  hapusPropertiDeveloper,
} = require("../controller/developerController");
const upload = require("../middleware/multer");
const { cacheRadis } = require("../middleware/caching");

/*developer listing.*/
router.post("/buatDeveloper", upload.single("logo"), buatDeveloper);
router.get("/ambilSemuaDeveloper", cacheRadis, ambilSemuaDeveloper);
router.get("/ambilDataDeveloper/:id", cacheRadis, ambilDeveloper);
router.get(
  "/ambilDeveloperByAdmin/:admin_id",
  cacheRadis,
  ambilDeveloperByAdmin
);
router.get("/cariDeveloper", cacheRadis, cariDeveloper);
router.patch("/editDeveloper/:id", editDeveloper);
router.patch("/tambahPropertiDeveloper/:id", tambahPropertiDeveloper);
router.delete("/hapusDeveloper/:id", hapusDeveloper);
router.patch("/hapusPropertiDeveloper/:id", hapusPropertiDeveloper);

module.exports = router;
