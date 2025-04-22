const express = require('express');

const app = express()
const port = process.env.port || 8080
const authRoute = require('./routes/auth-route')
const bookRoute = require('./routes/booking-route')
const CRUDroute = require('./routes/CRUD-route')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect(
    "mongodb+srv://ashritha97kommareddy:Ash13579@cluster0.ggx9sml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    (err) => {
        if(err){
            console.log("Database not connected", err)
        }else{
            console.log("Database connected")
        }
    }
)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use('/auth', authRoute);

app.use('/book', bookRoute)

app.use('/crud', CRUDroute)


app.get('/', (req, res) => {
    res.send("Hey World")
})

app.listen(port, () => {
    console.log("server is connected : ",port)
})

