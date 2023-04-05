const mongoose = require('mongoose');

const BrandsSchema = new  mongoose.Schema({
    brand:{type: String, required: true, unique:true},
    image: {type: String, required: true},
    url: {type: String, required: true, unique: true}
},
{
    timestamps: true,
    collection: 'brands'
});

const Brand = mongoose.model('brands', BrandsSchema);

module.exports = Brand;