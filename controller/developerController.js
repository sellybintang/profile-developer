const Developer=require('../models/DeveloperSchema');

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
        const admin_id = req.params.admin_id;
        const bacaSemuaDeveloper = await Developer.find({admin_id:admin_id})
        res.status(200).json({
            message: 'semua data developer', bacaSemuaDeveloper
        });

    }catch (error){
        return res.status(error.statusCode ||500).json({
            message: error.message,
        });
    };
};


// Search Data Properti Developer
const cariDeveloper = async (req, res) =>{
    try {
        // const cariPropertiDeveloper = req.body.properties
        const { name,properties } = req.body;

        const bacaSemuaDeveloper = await Developer.find({properties:properties, name:name});
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
    console.log(properties)
    try{
        const id = req.params.id;
        const tambahkanPropertiDeveloper = await Developer.findByIdAndUpdate(req.params.id,{properties:properties},{new:true});

        res.status(200).json({
            message:'data developer berhasil diubah',tambahkanPropertiDeveloper
        });
    }catch (error){
        return res.status(error.statusCode || 500).json({
            message:error.message,
        });
    };
};

// Delete Data properti Developer
const hapusPropertiDeveloper = async (req, res)=>{
    const {
        properties
    }= req.body
    console.log(properties)
    try{
        const hapuskanPropertiDeveloper = await Developer.findByIdAndUpdate(req.params.id,{$pull: {properties:{ $in:properties }}}, {new:true});
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


// const uploadImage = async (req, res) => {
//     // Jika file diunggah berhasil, req.file akan berisi informasi file yang diunggah
//     try{
//         if (req.file) {
//             const filePath = req.file.path;
//             res.status(200).send('Image uploaded successfully: ' + filePath);
//           } else {
//             res.status(400).send('No image was uploaded.');
//           }
//         }catch(error){
//             return res.status(error.statusCode || 500).json({
//                 message:error.message,
//             });
//         };
// };

module.exports={
    buatDeveloper,
    ambilSemuaDeveloper,
    ambilDeveloper,
    ambilDeveloperByAdmin,
    cariDeveloper,
    editDeveloper,
    tambahPropertiDeveloper,
    hapusPropertiDeveloper,
    hapusDeveloper,
    // uploadImages,
}

