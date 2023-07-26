const permission = require('../models/permissionSchema');

// buat CRUD
// Buat
const buatPremission = async (req, res)=>{
    try{
        const buatPremissionBaru = await permission.create(req.body())
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
        const ambilPremissionBaru = await permission.find(req.body())
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
        const ubahPermissionBaru = await permission.req.body(id.id)
        res.status(200).json({
            message:'data berhasil diubah', ubahPermissionBaru
        })
    }catch{
        res.status(402).json({
            message:'data gagal diubah'
        })
    }
}

const hapusPermission = async ()
module.exports = {
    buatPremission,
    ambilPremission,
    ubahPermission,
}

