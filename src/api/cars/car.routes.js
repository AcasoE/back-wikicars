const { createCar, getCars } = require("./car.cotrollers");
const uploadImage = require("../middlewares/file");
const carRoutes = require('express').Router();

carRoutes.post("/create", uploadImage.single('image'),  createCar)
carRoutes.get("/",  getCars)

module.exports = { carRoutes }