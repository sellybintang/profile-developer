const Developer = require('../models/developerSchema');

// CRUD for Developer
// Create Data Developer
const createDeveloper = async (req, res) =>{
    try {
        const newDeveloper = await Developer.create(req.body);
        res.status (200).json({
            message: 'data developer berhasil ditambahkan', newDeveloper
        });
    }catch (error){
        return res.status(error.statusCode ||500).json({
            message: error.message,
        });
    }
}

module.exports={
    createDeveloper,
    
}