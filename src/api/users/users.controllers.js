const { generateSign, verifyToken } = require('../../utils/jsonwebtoken')
const User = require('./users.model')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        return res.json(users)
    } catch (error) {
        return next(error)
    }
}

const registerUser  = async (req, res, next) => {

    try {
        if (req.body.rol === 'admin') {
            req.body.rol === 'user'
        }
        bcrypt.hashSync(req.body.password, 10)
        const newUser = new User(req.body)

        await newUser.save()
        return res.json(newUser)
    } catch (error) {
        
    }
}

const loginUser = async (req, res, next) => {

    try {
        const userToLog = await User.findOne({name: req.body.name})
    if (!userToLog) {
        res.status(500).json("No se ha encontrado el usuario")
        
    }
    if (bcrypt.compareSync(req.body.password, userToLog.password)) {
        const token = generateSign(userToLog._id);
        return res.status(200).json({token, userToLog})
    } else{
        return res.status(400).json('Contrseña incorrecta')
    }
    } catch (error) {
        return next(error)
    }
    
}

const isAdminGet = async (req, res, next) => {
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
            return res.status(200).json(userloged)
            
        } else{
            return res.json("No eres admin")
        }
    }
    } catch (error) {
        return next(error)
    }
}

const checkSession = async (re, res, next ) =>{
    try {
        return req.res
    
    } catch (error) {
        return next(error)
    }
}






module.exports = { getAllUsers, registerUser, loginUser, isAdminGet, checkSession}