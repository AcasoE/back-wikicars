const { createCar, getCars, getCarByid, deleteCarById, updateCarById } = require("./car.cotrollers");
const uploadImage = require("../middlewares/file");
const carRoutes = require('express').Router();

carRoutes.post("/create", uploadImage.single('image'),  createCar)
carRoutes.put("/update/:id", uploadImage.single('image'), updateCarById)
carRoutes.delete("/delete/:id", deleteCarById)
carRoutes.get("/:id",  getCarByid)
carRoutes.get("/",  getCars)

module.exports = { carRoutes }