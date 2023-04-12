const { generateSign } = require('../../utils/jsonwebtoken')
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
        const token = generateSign(userToLog._id, userToLog.name);
        return ews.status(200).json({token, userToLog})
    } else{
        return res.status(500).json('Contrseña incorrecta')
    }
    } catch (error) {
        return next(error)
    }
    
}







module.exports = { getAllUsers, registerUser, loginUser}