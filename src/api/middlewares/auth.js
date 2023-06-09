const { verify } = require("jsonwebtoken")
const { verifyToken } = require("../../utils/jsonwebtoken")
const User = require("../users/users.model")

const isAuth = async (req, res,next) => {
 
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.json('No estás autorizado')
        }
        const parsedToken = JSON.parse(token)
        const validToken = verifyToken(parsedToken.token)
        if(validToken){
            const userloged = await User.findById(parsedToken.id)
            userloged.password = null
            req.user = userloged
            next()
        }
        
    } catch (error) {
        return next(error)
    }


}

const isAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization

        if(!token){
            return res.json("No estás autorizado")
        }

        const parsedToken = JSON.parse(token)
        const validToken = verifyToken(parsedToken.token)
        if(validToken){
            const userloged = await User.findById(parsedToken.id)
        if (userloged.rol === "admin") {
            userloged.password = null
            req.user = userloged
            next()
            
        } else{
            return res.json("No eres admin")
        }
    }
    } catch (error) {
        return next(error)
    }
}

module.exports = {isAuth, isAdmin}