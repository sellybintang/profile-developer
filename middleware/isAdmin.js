const developer = require('../models/DeveloperSchema')

const isAdmin= async (req, res)=>{
    if (developer.req.role=="1"){
        next()
    } else {
        res.status (401).json({
            status: "failed",
            message:"hanya bisa diakses oleh admin"
        });
    }
}

module.export = isAdmin