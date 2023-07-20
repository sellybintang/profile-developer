const multer = require('multer');
const path = require('path');

// Konfigurasi penyimpanan file dengan multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Tentukan direktori penyimpanan file
      cb(null, 'images/');
    },
    filename: function (req, file, cb) {
      // Tentukan nama file yang disimpan (disesuaikan dengan ekstensi gambar)
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
  module.exports=upload