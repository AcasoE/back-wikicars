const Brand = require('./brands.model');
const path = require('path')
const createBrand = async (req, res, next)=>{
    try {
        const newBrand = await new Brand(req.body)
        if(req.file){
            newBrand.image = req.file.path;
        }
        await newBrand.save()
        return res.json(newBrand)
    } catch (error) {
        return next(error);
    }
};

const getAllBrands = async(req, res, next) => {
try {
    const brands =  await Brand.find();
    return  res.json(brands)
} catch (error) {
    return next(error)
}
}

module.exports ={ createBrand, getAllBrands };
