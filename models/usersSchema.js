const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    no_telp :{
        type: String,
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
        },
        kode_pos:{
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

usersSchema.method("toJSON", function(){
    const {__v, _id, ...object} = this.toObject()
    object.id = _id

    return object
})

const Users = mongoose.model('Users', usersSchema)

module.exports=Users