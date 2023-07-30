const axios = require('axios')

module.exports = {
    async authorize(req, res, next){
        try{
            const token = req.headers.authorization
            if(!token){
                return res.status(401).json({
                    status: "Error",
                    message: "Unauthorized"
                })
            }

            const reqData = {
                orgUrl: req.originalUrl
            }

            const cekToken = await axios.post('http://localhost:3003/userService/authorize', reqData,{
                headers: {
                    'Authorization': token
                }
            })

            next()
        }catch(err){
            res.status(401).json({
                status: "Error",
                message: "Unauthorized"
            })
        }
    }
}