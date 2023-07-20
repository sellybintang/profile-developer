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
   },
   boss_id:{
        type: String,
        required:true,
   },
   name:{
        type: String,
        required:true,
   },
   properties:{
        type: Array,
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
    createdAt:{
        type: Date,
        immutable: true,
        default:()=> Date.now(),
    },
    updateAt:{
        type: Date,
        immutable: true,
        default:()=> Date.now(),
    },
});

module.exports=mongoose.model("Developer", developerShema);