const mongoose = require('mongoose');


const permissionSchema = mongoose.Schema ({
    id_role :{
        type: String,
        required: true
    },
    hak_akses: {
        type: String,
        required: true
    }
})

permission = mongoose.model('permission', permissionSchema)
module.exports = permission