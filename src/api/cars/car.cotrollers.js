const Car = require ('./cars.model.js');

const createCar = async(req,res, next)=>{
    try {
        const newCar = await new Car(req.body);
        if(req.file){

            newCar.image=req.file.path
        };
        await newCar.save();
        return res.json(newCar)
    } catch (error) {
        return next(error)
    };
};

const getCars = async (req, res, next)=>{

    try {
        const cars = await Car.find()
        return res.json(cars)
    } catch (error) {
        return res.json(`No hemos podido acceder a los coches ${error}`)
    }
}
module.exports ={ createCar, getCars }