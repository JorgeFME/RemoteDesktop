const express = require("express");
const routes = express.Router();
const multer = require('multer');
const Bottleneck = require("bottleneck");

// Crea un nuevo objeto Bottleneck
const limiter = new Bottleneck({
    maxConcurrent: 1000, // Número máximo de solicitudes concurrentes
    minTime: 1000 / 5 // Tiempo mínimo entre las solicitudes (en milisegundos)
});

const upload = multer();


// Ruta Get Centrica
routes.get("/MonnitTemperature", (req, res) => {
    res.send("IoT Route: SANBORNS SENSOR IOT");
});

// Ruta Post
routes.post("/MonnitTemperature", limiter.wrap(upload.any()), async (req, res) => {
    // console.log("Body: ", req.body);

    if (Object.keys(req.body).length !== 0) {
        const sensorConfigData = req.body;
        const sensorMeasurementsRaw = req.files;
        if (req.body.MODE) {
            console.log("Modo: ", req.body.MODE)
            console.log("Body", req.body)
        } else {
            console.log("Solo Bdoy: ", req.body)
        }
    } else {
        console.log("No hay datos (Body vacío)")
    }

    res.send('SUCCESS');
})


module.exports = routes;