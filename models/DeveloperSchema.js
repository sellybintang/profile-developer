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
            required:true,
        },
        desa:{
            type: String,
            required:true,
        },
        kecamatan:{
            type: String,
            required:true,
        },
        kabupaten:{
            type: String,
            required:true,
        },
        provinsi:{
            type: String,
            required:true,
        },
        kode_pos:{
            type: String,
            required:true,
        },
    },

});

module.exports=mongoose.model("Developer", developerShema);