const mongoose = require('mongoose');


const permissionSchema = mongoose.Schema ({
    id_role :{
        type: Number,
        required: true
    },
    hak_akses: {
        type: Array,
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

permissionSchema.method("toJSON", function(){
    const {__v, _id, ...object} = this.toObject()
    object.id = _id

    return object
})

const permission = mongoose.model('permission', permissionSchema)
module.exports = permission