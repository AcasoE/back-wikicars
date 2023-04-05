
const { createBrand, getAllBrands } = require("./brands.controllers");
const uploadImage = require("../middlewares/file");
const brandRoues = require('express').Router();

brandRoues.post("/create", uploadImage.single('image'), createBrand);
brandRoues.get("/", getAllBrands)

module.exports = {brandRoues};