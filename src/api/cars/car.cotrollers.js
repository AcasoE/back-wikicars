const { deleteFile } = require("../middlewares/delete.file.js");
const Car = require("./cars.model.js");

const createCar = async (req, res, next) => {
  try {
    const newCar = await new Car(req.body);
    if(newCar.checked == true){
      newCar.checked = false
    }
    if (req.file) {
      newCar.image = req.file.path;
    }
    await newCar.save();
    return res.json(newCar);
  } catch (error) {
    return next(error);
  }
};
const getCarByid = async (req, res, netx) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    if (!car) {
      return res.json("No se encuentra el coche, no se reconoce ese id");
    }
    return res.json(car)
  } catch (error) {
    return next(error)
  }
};
const getCars = async (req, res, next) => {
  try {
    const cars = await Car.find();
    return res.json(cars);
  } catch (error) {
    return res.json(`No hemos podido acceder a los coches ${error}`);
  }
};
const deleteCarById = async(req, res, next)=>{

    try {
        const { id } = req.params
        const car = await Car.findByIdAndDelete(id)
        if (!car) {
            return res.json("no hemos podido encontrar ese coche con ese id")
        }
        return res.status(200).json(car)
    } catch (error) {
        return next(error)
    }
}
const updateCarById = async (req, res, next)=>{
    try {
        const { id } = req.params
        if (req.file) {
            const oldCar = await Car.findById(id)
            if (oldCar.image) {
                deleteFile(oldCar.image)
            }
            req.body.image = req.file.path
        }
        const carUpdated = await Car.findByIdAndUpdate(id, req.body,{new: true})
        return res.status(200).json(carUpdated)
    } catch (error) {
        return next(error)
    }
}
module.exports = { createCar, getCars, getCarByid, deleteCarById, updateCarById };
