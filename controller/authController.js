const Users = require('../models/usersSchema')
const bcrypt = require('bcrypt')
const crypto = require('crypto-js')
require('dotenv').config();

const createToken = async(payload) => {
    const data = JSON.stringify(payload)
    return crypto.AES.encrypt(data, process.env.KEY).toString()
}

const register = async(req, res)=>{
    
    try{
        const email = req.body.email
        const user= await Users.findOne({email:email})
        if (user){
            return res.status(400).json({
                message: "Maaf email sudah terdaftar"
            })
        }
        
        const password = req.body.password
        if(password.length<8){
            return res.status(400).json({
                message:'minimal password 8 karakter'
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password=hashedPassword
        const registerUsers = await Users.create(req.body)
        res.status(200).json({
            message: "User telah berhasil terdaftar", 
            data: registerUsers
        })
    }catch{
        res.status(402).json({
            message:"User gagal mendaftar"
        })
    }
}


const login = async(req, res) => {
    try{
        if(!req.body.email || !req.body.password){
            return res.status(400).json({
                status: "Gagal",
                message: "Terdapat form yang kosong."
            })
        }
    
        const email = req.body.email.toLowerCase()
        const password = req.body.password
    
        const user = await Users.findOne({email: email})
    
        if(!user) {
            return res.status(404).json({
                status: "Gagal",
                message: "Akun Tidak Ditemukan."
            })
        }
    
        const cekPassword = await bcrypt.compare(password, user.password)
    
        if(!cekPassword){
            return res.status(401).json({
                status: "Gagal",
                message: "Password Salah."
            })
        }
    
        const token = await createToken({
            user_id: user.id,
            role_id: user.role,
            exp: Math.floor(Date.now() / 1000) + 3600
        })
    
        res.status(200).json({
            status: "Berhasil",
            message: "Anda Berhasil Login.",
            data: {
                nama: user.name,
                no_telp: user.no_telp,
                alamat: user.alamat,
                token: "Bearer " + token
            }
        })
    }catch(err){
        res.status(500).json({
            status: "Error",
            message: err.message
        })
    }
}

const whoami = async(req, res) => {
    res.status(200).json({
        status: "Berhasil",
        message: "Data User Ditemukan.",
        data: req.user
    });
};

const ambilSemuaProfile = async (req, res) =>{
    try{
        const ambilSemuaProfiles = await Users.find();
        res.status(200).json({
            message: 'Data Semua Users', ambilSemuaProfiles
        })
    }catch {
        res.status(401).json({
            message: 'Hanya bisa diakses oleh Super Admin dan Admin'
        })
    }
}

module.exports = {
    register,
    login,
    whoami,
    ambilSemuaProfile
    
}