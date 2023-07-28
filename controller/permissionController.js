const permission = require('../models/permissionSchema')
const Users = require('../models/usersSchema')
const crypto = require('crypto-js')


const readToken = async(token) => {
    const bytes = crypto.AES.decrypt(token, process.env.KEY);
    const decryptedData = bytes.toString(crypto.enc.Utf8);
    return JSON.parse(decryptedData);
}

const buatPremission = async (req, res)=>{
    try{
        const maksPremission = 3
        const existingCount = await permission.countDocuments();
        console.log(existingCount)
        if (existingCount>=maksPremission){
            res.status(401).json({
                message: "Data tidak boleh melebihi batas maksimal"
            })
        }

        const buatPremissionBaru = await permission.create(req.body)
        res.status(200).json({
            message: 'Data Berhasil dibuat', buatPremissionBaru
        })

        
    }catch{
        res.status(401).json({
            message: 'Data gagal diproses'
        })
    }
};

const ambilPremission = async (req, res) =>{
    try{
        const ambilPremissionBaru = await permission.find()
        console.log(ambilPremissionBaru)
        res.status(200).json({
            message: 'Data berhasil dimunculkan', ambilPremissionBaru
        })
    }catch{
        res.status(401).json({
            message: 'Data gagal dimunculkan'
        })
    }
};

const ubahPermission = async (req, res) =>{
    try {
        const id_permission = req.params.id;
        
        const edit = req.body
        console.log(edit)
        const ubahPermissionBaru = await permission.findByIdAndUpdate(id_permission, edit, {
            new: true,
            runValidators: true,
        })
        console.log(ubahPermissionBaru)
        res.status(200).json({
            message:'data berhasil diubah', ubahPermissionBaru
        })
    }catch{
        res.status(402).json({
            message:'Maaf, data gagal diubah'
        })
    }
}

const hapusPermission = async  (req, res) =>{
    try{
        const id_permission = req.params;
        console.log(id)
        const hapusPermissionBaru = await permission.findByIdAndDelete(id_permission.id)
        res.status(200).json({
            message: 'Data berhasil dihapus', hapusPermissionBaru
        })
    }catch {
        res.status(402).json({
            message: 'Maaf, data gagal dihapus'
        })
    }
}


module.exports = {
    buatPremission,
    ambilPremission,
    ubahPermission,
    hapusPermission,
}




module.exports = {
    buatPremission,
    ambilPremission,
    ubahPermission,
    hapusPermission,
    authorizeEndpoint
}

