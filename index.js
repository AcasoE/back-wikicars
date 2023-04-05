//Rutas desde controladores
const { carRoutes } = require("./src/api/cars/car.routes.js");
const { brandRoues } = require("./src/api/brands/brands.routes.js");
const { userRoutes }= require("./src/api/users/users.routes.js");
const { carToReviseRoutes } = require ("./src/api/carsToRevise/cars-to-revise.routes.js")

//VARIABLES OCULTAS
require("dotenv").config();
const port = process.env.PORT;

const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

//SERVIDOR
const cors = require("cors");
const express = require("express");
const server = express();
server.use(cors());




//BBDD
const db = require("./src/utils/db.js");
db.connectDB();



//MIDDELWARE PARA INPERPRETAR PETICIONES
server.use(express.json());
server.use(express.urlencoded({extended: true}));



server.use('/cars', carRoutes)
server.use('/brands', brandRoues)
server.use('/users', userRoutes)
server.use('/carstorevise', carToReviseRoutes)


//MIDDELWARE PARA INPERPRETAR ERRORES
server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || "Error inesperado");
});

//Middelware para en caso de meterle una ruta que no exista en nuestro back, salga un error

server.use("*", (req, res, next)=>{
    return res.status(404).json("Route not found");
});




server.use("/", (req,res)=>{
    res.send("funcionando");
});
server.listen(port,()=>{
    console.log(`El servidor está disponible en http://localhost:${port}`);
});