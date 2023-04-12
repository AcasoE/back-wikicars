
const { createBrand, getAllBrands } = require("./brands.controllers");
const uploadImage = require("../middlewares/file");
const { isAdmin } = require("../middlewares/auth");
const brandRoues = require('express').Router();

brandRoues.post("/create", [isAdmin], uploadImage.single('image'), createBrand);
brandRoues.get("/", getAllBrands)

module.exports = {brandRoues};