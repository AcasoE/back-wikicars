const uploadImage = require('../middlewares/file')
const carToReviseRoutes = require('express').Router()
const { getAllCarsToRevise, createCarTorevise, deleteCarToReviseById, getCarToReviseByModel} = require('./cars-to-revise.controllers')

carToReviseRoutes.post("/create", uploadImage.single('image'), createCarTorevise)
carToReviseRoutes.delete("/remove/:id", deleteCarToReviseById)
carToReviseRoutes.get("/:model", getCarToReviseByModel)
carToReviseRoutes.get("/", getAllCarsToRevise)

module.exports = {carToReviseRoutes}