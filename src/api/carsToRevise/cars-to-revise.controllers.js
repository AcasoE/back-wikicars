const CarToRevise = require ('./cars-to-revise.model');

const getAllCarsToRevise = async (req, res, next)=>{

    try {
        
        const carsTorevise = await CarToRevise.find()
        return res.json(carsTorevise);
    } catch (error) {
        next(error);
    }
}


const createCarTorevise = async(req, res, next)=>{

    try {
        
        const newCarToRevise =  new CarToRevise(req.body)
        if (req.file) {
            newCarToRevise.image = req.file.path;
        }
        await newCarToRevise.save()
        return res.json(newCarToRevise);
    } catch (error) {
        return next(error);
    }
}
const getCarToReviseById = async (req, res, next)=>{
    try {
       const { id } = req.params; 
       const car  = await CarToRevise.findOne(id);
       if(!car){
        return res.json("No hemos podido encontrar el coche, ese id no lo tenemos registrado")
       }
       return res.json(car)
    } catch (error) {
        return next(error)
    }
}
const deleteCarToReviseById = async (req, res, next)=>{

    try {
        const { id } = req.params;
        const carDeleted = await CarToRevise.findByIdAndDelete(id)
        return res.status(200).json(carDeleted)
    } catch (error) {
        next(error)
    }
}

module.exports = {createCarTorevise, deleteCarToReviseById, getAllCarsToRevise, getCarToReviseById}