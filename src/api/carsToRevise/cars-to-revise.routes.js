const uploadImage = require('../middlewares/file')
const carToReviseRoutes = require('express').Router()
const { getAllCarsToRevise, createCarTorevise, deleteCarToReviseById, getCarToReviseById} = require('./cars-to-revise.controllers')

carToReviseRoutes.post("/create", uploadImage.single('image'), createCarTorevise)
carToReviseRoutes.delete("/remove/:id", deleteCarToReviseById)
carToReviseRoutes.get("/:id", getCarToReviseById)
carToReviseRoutes.get("/", getAllCarsToRevise)

module.exports = {carToReviseRoutes}