// const bcrypt = require('bcrypt')
const Users = require('../models/usersSchema')
const bcrypt = require('bcrypt')

const register = async(req, res)=>{
    try{
        let password = req.body.password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password=hashedPassword
        const registerUsers = await Users.create(req.body)
        console.log(registerUsers)
        res.status(200).json({
            message: "User telah berhasil terdaftar", data: registerUsers
            
        })
        
    }catch{
        res.status(500).json({
            message:"User gagal mendaftar"
        })
    }
}

module.exports = {
    register,
}