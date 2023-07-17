const mongoose=require('mongoose');


const developerShema = new mongoose.Schema({
   admin_boss_id: {
        type: String,
        required:true,
   },
   admin_id:{
        type: String,
        required:true,
   },
   logo: {
        type: String,
        required:true,
   },
   boss_id:{
        type: String,
        required:true,
   },
   name:{
        type: String,
        required:true,
   },
   alamat:{
        jalan: {
            type: String,
            required:[true,"tolong masukkan durasi iklan"],
        },
        desa:{
            type: String,
            required:[true,"tolong masukkan durasi iklan"],
        },
        kecamatan:{
            type: String,
            required:[true,"tolong masukkan durasi iklan"],
        },
        kabupaten:{
            type: String,
            required:[true,"tolong masukkan durasi iklan"],
        },
        provinsi:{
            type: String,
            required:[true,"tolong masukkan durasi iklan"],
        },
        kode_pos:{
            type: Number,
            required:[true,"tolong masukkan durasi iklan"],
        },
    },

});

module.exports=mongoose.model("Developer", developerShema);