const { isAdmin, isAuth } = require('../middlewares/auth')
const { getAllUsers, registerUser, loginUser, isAdminGet, checkSession,  } = require('./users.controllers')
const userRoutes = require('express').Router()
userRoutes.get("/rol",[isAuth], isAdminGet)
userRoutes.post("/register", registerUser)
userRoutes.post("/login", loginUser)
userRoutes.get("/check",[isAuth], checkSession)
userRoutes.get("/",[isAdmin] ,getAllUsers)

module.exports = {userRoutes}