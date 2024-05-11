const express = require('express')
const routes = require('./index.js')

const app = express()
app.set('port', process.env.PORT || 8080)


// middlewares -------------------------------------
app.use(express.json())

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome IoT SANBORNS SENSOR IOT V2')/*  */
})
app.use('/iot-devices', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', 'http://localhost:' + app.get('port'))
})