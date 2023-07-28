const permission = require('../models/permissionSchema')
const Users = require('../models/usersSchema')
const crypto = require('crypto-js')

// buat CRUD
// Buat

const readToken = async(token) => {
    const bytes = crypto.AES.decrypt(token, process.env.KEY);
    const decryptedData = bytes.toString(crypto.enc.Utf8);
    return JSON.parse(decryptedData);
}

const buatPremission = async (req, res)=>{
    try{
        console.log(req.body)
        const buatPremissionBaru = await permission.create(req.body)
        res.status(200).json({
            message: 'Data Berhasil dibuat', 
            data: buatPremissionBaru
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
        const id = req.params.id_permission
        const ubahPermissionBaru = await permission.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json({
            message:'data berhasil diubah', 
            data: ubahPermissionBaru
        })
    }catch{
        res.status(402).json({
            message:'Maaf, data gagal diubah'
        })
    }
}

const hapusPermission = async  (req, res) =>{
    try{
        const id = req.params.id_permission
        const hapusPermissionBaru = await permission.finByIdAndDelete(id)
        res.status(200).json({
            message: 'Data berhasil dihapus', hapusPermissionBaru
        })
    }catch {
        res.status(402).json({
            message: 'Maaf, data gagal dihapus'
        })
    }
}

const authorizeEndpoint = async (req, res) => {
    try{
        const bearerToken = req.headers.authorization
        if(!bearerToken){
            return res.status(401).json({
                status: "Error",
                message: "Unauthorized"
            })
        }

        const token = bearerToken.split("Bearer ")[1];
        const tokenPayload = await readToken(token)

        const akses = await permission.findOne({id_role: tokenPayload.role_id})
        const endpoint = req.body.orgUrl.split('/')[2]

        const cekHak = akses.hak_akses.find(e => e == endpoint)
        if(!cekHak){
            return res.status(401).json({
                status: "Error",
                message: "Unauthorized"
            })
        }

        res.status(200).json({
            status: "Berhasil",
            message: "Akses Diberikan"
        })
    }catch(err){
        res.status(500).json({
            status: "Error",
            message: err.message
        })
    }
}



module.exports = {
    buatPremission,
    ambilPremission,
    ubahPermission,
    hapusPermission,
    authorizeEndpoint
}

