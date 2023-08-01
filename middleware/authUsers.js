const Users = require ('../models/usersSchema');
const Permissions = require('../models/permissionSchema');
const crypto = require('crypto-js')

const readToken = async(token) => {
    const bytes = crypto.AES.decrypt(token, process.env.KEY);
    const decryptedData = bytes.toString(crypto.enc.Utf8);
    return JSON.parse(decryptedData);
}

const superAdmin = async (req, res, next)=> {
    if(Users.role=='1'){
        next()
    }else{
    res.status(401).json({
        status:"failed",
        message:"Hanya bisa diakses user Super Admin"
    })
    }
}
const isAdmin = async (req, res, next)=> {
    if(Users.role=='2'){
        next()
    }else{
    res.status(401).json({
        status:"failed",
        message:"Hanya bisa diakses user Admin"
    })
    }
}
const isUser = async (req, res, next)=> {
    if(Users.role=='3'){
        next()
    }else{
    res.status(401).json({
        status:"failed",
        message:"Hanya bisa diakses user Admin"
    })
    }
}

const isLogin = async(req, res, next) => {
    try{
        if(!req.headers.authorization){
            return res.status(401).json({
                status: "Error",
                message: "Unauthorized",
            })
        }
        
        const bearerToken = req.headers.authorization
        const token = bearerToken.split("Bearer ")[1];

        const tokenPayload = await readToken(token)

        if(tokenPayload.exp && tokenPayload.exp < Math.floor(Date.now() / 1000)){
            return res.status(401).json({
                status: "Error",
                message: "Token kadaluwarsa, silahkan login kembali."
            })
        }
        
        const user = await Users.findById(tokenPayload.user_id);

        req.user = user;

        next();
    }catch(err){
        res.status(500).json({
            status: "Error",
            message: err.message,
        })
    }
}

const authorize = async(req, res, next) => {
    try{
        if(!req.headers.authorization){
            return res.status(401).json({
                status: "Error",
                message: "Unauthorized",
            })
        }
        
        const bearerToken = req.headers.authorization
        const token = bearerToken.split("Bearer ")[1];

        const tokenPayload = await readToken(token)

        if(tokenPayload.exp && tokenPayload.exp < Math.floor(Date.now() / 1000)){
            return res.status(401).json({
                status: "Error",
                message: "Token kadaluwarsa, silahkan login kembali."
            })
        }
        
        const user = await Users.findById(tokenPayload.user_id);
        const akses = await Permissions.findOne({id_role: tokenPayload.role_id})

        if(!user){
            return res.status(404).json({
                status: "Error",
                message: "Data Akun Tidak Ditemukan"
            })
        }

        if(!akses){
            return res.status(404).json({
                status: "Error",
                message: "Data Role Tidak Ditemukan"
            })
        }

        if(user.role == 1){
            return next();
        }

        const endpoint = req.originalUrl.split('/')[2]


        const cekHak = akses.hak_akses.find(e => e == endpoint)
        if(!cekHak){
            return res.status(401).json({
                status: "Error",
                message: "Unauthorized",
            })
        }

        req.user = user;

        next();
    }catch(err){
        res.status(500).json({
            status: "Error",
            message: err.message,
        })
    }
}

module.exports = {
    superAdmin,
    isAdmin,
    isUser,
    isLogin,
    authorize
}