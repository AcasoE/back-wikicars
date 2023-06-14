const { createCar, getCars, getCarByid, deleteCarById, updateCarById } = require("./car.cotrollers");
const uploadImage = require("../middlewares/file");
const { isAuth, isAdmin } = require("../middlewares/auth");
const carRoutes = require('express').Router();

carRoutes.post("/create",[isAuth],  uploadImage.single('image'), createCar)
carRoutes.put("/update/:id", [isAdmin],uploadImage.single('image'), updateCarById)
carRoutes.delete("/delete/:id", [isAdmin], deleteCarById)
carRoutes.get("/:id",[isAuth],getCarByid)
carRoutes.get("/",[isAuth],  getCars)

module.exports = { carRoutes }