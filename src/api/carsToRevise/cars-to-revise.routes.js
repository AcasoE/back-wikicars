const uploadImage = require('../middlewares/file')
const carToReviseRoutes = require('express').Router()
const { getAllCarsToRevise, createCarTorevise, deleteCarToRevise} = require('./cars-to-revise.controllers')

carToReviseRoutes.post("/create", createCarTorevise)
carToReviseRoutes.delete("/remove/:id", deleteCarToRevise)
carToReviseRoutes.get("/", getAllCarsToRevise)

module.exports = {carToReviseRoutes}