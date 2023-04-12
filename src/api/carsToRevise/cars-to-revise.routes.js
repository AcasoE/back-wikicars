const { isAdmin, isAuth } = require('../middlewares/auth')
const uploadImage = require('../middlewares/file')
const carToReviseRoutes = require('express').Router()
const { getAllCarsToRevise, createCarTorevise, deleteCarToReviseById, getCarToReviseById} = require('./cars-to-revise.controllers')

carToReviseRoutes.post("/create",[isAuth], uploadImage.single('image'), createCarTorevise)
carToReviseRoutes.delete("/remove/:id",[isAdmin], deleteCarToReviseById)
carToReviseRoutes.get("/:id",[isAdmin], getCarToReviseById)
carToReviseRoutes.get("/",[isAdmin], getAllCarsToRevise)

module.exports = {carToReviseRoutes}