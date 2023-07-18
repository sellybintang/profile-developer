const Developer=require('../models/DeveloperSchema');
const isAdmin = require('../middleware/isAdmin');

// CRUD for Developer
// Create Data Developer
const buatDeveloper = async (req, res) =>{
    try {
        const buatbaruDeveloper = await Developer.create(req.body);
        res.status (200).json({
            message: 'data developer berhasil ditambahkan', buatbaruDeveloper
        });
    }catch (error){
        return res.status(error.statusCode ||500).json({
            message: error.message,
        });
    };
};

// Read All Data Developer
const ambilSemuaDeveloper = async (req, res) =>{
    try {
        const bacaDeveloperIdAdmin = await Developer.find();
        res.status(200).json({
            message: 'semua data developer', bacaDeveloperIdAdmin
        });
    }catch (error){
        return res.status(error.statusCode ||500).json({
            message: error.message,
        });
    };
};

// Read Data ById Developer
const ambilDeveloper = async (req, res)=>{
    try{
        const id = req.params.id;
        console.log(id)
        const bacaIdDeveloper = await Developer.findById(id);
        res.status(200).json({
            message:'data developer', bacaIdDeveloper
        });
        
    }catch (error){
        res.status(error.statusCode || 500).json({
            message:error.message,
        });
    };
};

// Read Data ByAdmin Developer
const ambilDeveloperByAdmin = async (req, res) =>{
    try {
        const admin_id = req.params.id;
        const id = async (req, res)=>{
        if(req.body.role==1){
            next()
        }else{
            res.status(401).json({
                status:"failed",
                message:"tidak ada data Admin Developer"
            })
        }
    }
        const bacaSemuaDeveloper = await Developer.findById(admin_id,{id}.id);
        res.status(200).json({
            message: 'semua data developer', bacaSemuaDeveloper
        });
        console.log(bacaDeveloperIdAdmin)
    }catch (error){
        return res.status(error.statusCode ||500).json({
            message: error.message,
        });
    };
};


// Search Data Properti Developer
const cariDeveloper = async (req, res) =>{
    try {
        const cariPropertiDeveloper={
            properties
        }= req.body
        const id = req.params.id
        const bacaSemuaDeveloper = await Developer.findById((id._id),cariPropertiDeveloper);
        res.status(200).json({
            message: 'semua data developer', bacaSemuaDeveloper
        });
    }catch (error){
        return res.status(error.statusCode ||500).json({
            message: error.message,
        });
    };
};


// Update Data Developer
const editDeveloper = async (req, res)=>{
    try{
        const id = req.params;
        const editIdDeveloper = await Developer.findByIdAndUpdate(id._id);
        res.status(200).json({
            message:'data developer berhasil diubah', editIdDeveloper
        });
    }catch (error){
        return res.status(error.statusCode || 500).json({
            message:error.message,
        });
    };
};


// Update Data Developer
const tambahPropertiDeveloper = async (req, res)=>{
    const {
        properties
    }= req.body
    try{
        const id = req.params;
        const tambahkanPropertiDeveloper = await Developer.findByIdAndUpdate(id.properties._id);

        res.status(200).json({
            message:'data developer berhasil diubah', tambahkanPropertiDeveloper
        });
    }catch (error){
        return res.status(error.statusCode || 500).json({
            message:error.message,
        });
    };
};

// Delete Data properti Developer
const hapusPropertiDeveloper = async (req, res)=>{
    try{
        const id = req.params
        const pp={
            properties
        }=req.body
        const hapuskanPropertiDeveloper = await Developer.findByIdAndDelete(id._id(pp));
        res.status(200).json({
            message:'data developer berhasil dihapus', hapuskanPropertiDeveloper
        });
    }catch (error){
        return res.status(error.statusCode || 500).json({
            message:error.message,
        });
    };
};


// Delete Data Developer
const hapusDeveloper = async (req, res)=>{
    try{
        const id = req.params
        const hapusIdDeveloper = await Developer.findByIdAndDelete(id._id);
        res.status(200).json({
            message:'data developer berhasil dihapus', hapusIdDeveloper
        });
    }catch (error){
        return res.status(error.statusCode || 500).json({
            message:error.message,
        });
    };
};
module.exports={
    buatDeveloper,
    ambilSemuaDeveloper,
    ambilDeveloper,
    ambilDeveloperByAdmin,
    cariDeveloper,
    editDeveloper,
    // tambahPropertiDeveloper,
    // hapusPropertiDeveloper,
    hapusDeveloper,
}

