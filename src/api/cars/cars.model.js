const mongoose = require("mongoose");
const CarsSchema = new mongoose.Schema({
  brand: [{ type: mongoose.Types.ObjectId, ref: 'brands'}],
  model: { type: String, required: true, unique: true },
  type: { 
    type: String, 
    required: true,
    enum:['Sedán', 'Compacto', 'Cuopé', 'Roadster', 'Ranchera'] },
  power: { type: Number, required: true },
  par: { type: Number, required: true },
  engineType: { type: String, required: true },
  engineCil: { type: Number, required: true },
  traction: {
    type: String,
    required: true,
    enum:['Trasera', 'Delantera', '4X4'] },
  year: { type: Number, required: true },
  heigh: { type: Number, required: true },
  speed: { type: Number, required: true },
  image: { type: String, required: true },
},{
  timestamps: true,
  collection: 'cars'
});

const Car = mongoose.model('cars', CarsSchema);
module.exports =  Car;