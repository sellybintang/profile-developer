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
}

