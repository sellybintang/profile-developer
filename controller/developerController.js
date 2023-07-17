const Developer=require('../models/DeveloperSchema');

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
    };
};

// Read All Data Developer
const readAllDeveloper = async (req, res) =>{
    try {
        const readsDeveloper = await Developer.find();
        res.status(200).json({
            message: 'semua data developer', readsDeveloper
        });
    }catch (error){
        return res.status(error.statusCode ||500).json({
            message: error.message,
        });
    };
};

// Read Data By Id Developer
const readIdDeveloper = async (req, res)=>{
    try{
        const id = req.params.id;
        console.log(id)
        const readsIdDeveloper = await Developer.findById(id);
        res.status(200).json({
            message:'data developer', readsIdDeveloper
        });
        
    }catch (error){
        res.status(error.statusCode || 500).json({
            message:error.message,
        });
    };
};

// Update Data Developer
const updateDeveloper = async (req, res)=>{
    try{
        const id = req.params;
        const updatedIdDeveloper = await Developer.findByIdAndUpdate(id._id);
        res.status(200).json({
            message:'data developer berhasil diubah', updatedIdDeveloper
        });
    }catch (error){
        return res.status(error.statusCode || 500).json({
            message:error.message,
        });
    };
};

// Delete Data Developer
const deleteDeveloper = async (req, res)=>{
    try{
        const id = req.params
        const deletedIdDeveloper = await Developer.findByIdAndDelete(id._id);
        res.status(200).json({
            message:'data developer berhasil dihapus', deletedIdDeveloper
        });
    }catch (error){
        return res.status(error.statusCode || 500).json({
            message:error.message,
        });
    };
};
module.exports={
    createDeveloper,
    readAllDeveloper,
    readIdDeveloper,
    updateDeveloper,
    deleteDeveloper,
}