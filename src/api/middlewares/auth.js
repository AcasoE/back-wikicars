const { verify } = require("jsonwebtoken")
const { verifyToken } = require("../../utils/jsonwebtoken")
const User = require("../users/users.model")

const isAuth = async (req, res,next) => {
 
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.json(req.headers.authorization)
        }
        console.log("hola1");

        const parsedToken = token.replace('Bearer ', '')
        console.log("hola2");

        const validToken = verifyToken(parsedToken)
        console.log("hola3");
        const userloged = await User.findById(validToken.id)
        userloged. password = null
        req.user = userloged
        next()
    } catch (error) {
        return next(error)
    }


}

const isAdmin = async (req, res, next) => {
    try {
        const token = req.body.authorization
        if(!token){
            return res.json("No estás autorizado")
        }

        const parsedToken = token.replace("Bearer ", "")
        const validToken = verifyToken(parsedToken)
        const userloged = User.findById(validToken.id)

        if (userloged.rol === "admin") {
            userloged.password = null
            req.user = userloged
            next()
            
        } else{
            return res.json("No eres admin")
        }

    } catch (error) {
        return next(error)
    }
}

module.exports = {isAuth, isAdmin}