const mongoose = require("mongoose");
const CarsSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      enum: [
        "Seat",
        "Renault",
        "Peugeot",
        "Citroën",
        "Ford",
        "Opel",
        "Volkswagen",
        "Toyota",
        "Nissan",
        "Fiat",
        "Kia",
        "Hyundai",
        "Bmw",
        "Mercedes-Benz",
        "Audi",
        "Volvo",
        "Mazda",
        "Skoda",
        "Mini",
        "Land Rover",
        "Jeep",
        "Mitsubishi",
        "Suzuki",
        "Honda",
        "Alfa Romeo",
        "Lexus",
        "Subaru",
        "Porsche",
        "Jaguar",
        "Smart",
      ],
      required: true,
    },
    model: { type: String, required: true, unique: true },
    type: {
      type: String,
      required: true,
      enum: ["Sedán", "Compacto", "Deportivo", "Roadster", "Ranchera"],
    },
    power: { type: Number, required: true },
    par: { type: Number, required: true },
    engineType: { type: String, required: true },
    engineCil: { type: Number, required: true },
    traction: {
      type: String,
      required: true,
      enum: ["Trasera", "Delantera", "4X4"],
    },
    year: { type: Number, required: true },
    heigh: { type: Number, required: true },
    speed: { type: Number, required: true }, 
    image: { type: String },
    checked: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
    collection: "cars",
  }
);

const Car = mongoose.model("cars", CarsSchema);
module.exports = Car;
