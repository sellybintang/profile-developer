const Users = require ('../models/usersSchema');
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

const authorize = async(req, res, next) => {
    try{
        console.log(req.headers.authorization)
        const bearerToken = req.headers.authorization
        const token = bearerToken.split("Bearer ")[1];
        const tokenPayload = await readToken(token)

        const user = await Users.findById(tokenPayload.user_id);
        req.user = user;

        next();
    }catch(err){
        res.status(401).json({
            status: "Error",
            message: "Unauthorized",
        })
    }
}

module.exports = {
    superAdmin,
    isAdmin,
    isUser,
    authorize
}