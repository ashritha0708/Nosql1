const express = require('express');

const app = express()
const port = process.env.port || 8080
const authRoute = require('./routes/auth-route')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect(
    "mongodb+srv://akshithaksh56:pass123@plan-your-trip.t4bsyph.mongodb.net/appData",
    (err) => {
        if(err){
            console.log("Db not connected")
        }else{
            console.log("Db connected")
        }
    }
)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use('/auth', authRoute);


app.get('/', (req, res) => {
    res.send("Hey World")
})

app.listen(port, () => {
    console.log("server is connected : ",port)
})