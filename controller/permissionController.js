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
        // Validasi untuk maksimal jumlah data
        const maksPremission = 3
        const existingCount = await permission.countDocuments();
        // console.log(existingCount)
        if (existingCount >  maksPremission){
            res.status(401).json({
                message: "Data tidak boleh melebihi batas maksimal"
            })
        }
        
        // Validasi untuk ketentuan angka role
        const {id_role}=req.body
        console.log()
        if (id_role <1 || id_role >3 ){
            return res.status(400).json({
                message:'role tidak sesuai dengan ketentuan'
            })
        }

        // Validasi untuk ketentuan role yag sudah ada
        const jumlah_id_role= await permission.findOne({id_role:id_role})
        console.log(jumlah_id_role)
        if (jumlah_id_role){
            return res.status(400).json({
                message:'jumlah nilai role sudah tersedia'
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
        console.log(id_permission)
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

        
        if(tokenPayload.exp && tokenPayload.exp < Math.floor(Date.now() / 1000)){
            return res.status(401).json({
                status: "Error",
                message: "Token kadaluwarsa, silahkan login kembali."
            })
        }
        
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

