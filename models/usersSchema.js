const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    no_telp :{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    tempat_tanggal_lahir:{
        type: String,
        required: true
    },
    alamat:{
        jalan:{
            type: String,
            required: true
        },
        desa:{
            type: String,
            required: true
        },
        kecamatan:{
            type: String,
            required: true
        },
        kabupaten:{
            type: String,
            required: true
        },
        provinsi:{
            type: String,
            required: true
        }
    },
    role:{
        type: String,
        required: true
    },
    createdAd:{
        type: Date,
        default: ()=> Date.now()
    },
    updatedAd:{
        type: Date,
        default:()=> Date.now()
    }
})

const Users = mongoose.model('Users', usersSchema)

module.exports=Users