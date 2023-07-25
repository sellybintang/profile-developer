// const bcrypt = require('bcrypt')
const users = require('../models/usersSchema')


const register = async(req, res)=>{
    try{
        const registerUsers = user.create(req.body())
        res.status(200).json({
            message: "User telah berhasil terdaftar", registerUsers
        })
    }catch{
        res.status(500).json({
            message:"User gagal mendaftar"
        })
    }
}