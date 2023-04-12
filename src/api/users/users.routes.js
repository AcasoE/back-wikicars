const { isAdmin } = require('../middlewares/auth')
const { getAllUsers, registerUser, loginUser } = require('./users.controllers')
const userRoutes = require('express').Router()

userRoutes.post("/register", registerUser)
userRoutes.post("/login", loginUser)
userRoutes.get("/",[isAdmin] ,getAllUsers)

module.exports = {userRoutes}