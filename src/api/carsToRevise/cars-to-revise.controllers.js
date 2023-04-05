const CarToRevise = require ('./cars-to-revise.model')

const getAllCarsToRevise = async (req, res, next)=>{

    try {
        
        const carsTorevise = await CarToRevise.find()
        return res.json(carsTorevise)
    } catch (error) {
        next(error)
    }
}


const createCarTorevise = async(req, res, next)=>{

    try {
        
        const newCarToRevise = await new Car(req.body)
        if (req.file) {
            newCar.image = req.file.path
        }
        await newCarToRevise.save()
        return res.json(newCarToRevise)
    } catch (error) {
        return next(error)
    }
}

const deleteCarToRevise = async (req, res, next)=>{

    try {
        const { id } = req.paramas;
        const carDeleted = await Car.findByIdAndDelete(id)
        res.json.status(200).json(carDeleted)
    } catch (error) {
        next(error)
    }
}

module.exports = {createCarTorevise, deleteCarToRevise, getAllCarsToRevise}