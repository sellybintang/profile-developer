const Users = require ('../models/usersSchema');

const isSuperAdmin = async (req, res, next)=> {
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

module.exports = {
    isSuperAdmin,
    isAdmin
}