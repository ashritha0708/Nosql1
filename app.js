const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const authRoute = require('./routes/auth-route');
const bookRoute = require('./routes/booking-route');
const CRUDroute = require('./routes/CRUD-route');
const feedbackRoute = require('./routes/feedback-route');
const destinationRoute = require('./routes/destination-route');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// MongoDB Atlas connection
mongoose.connect(
    "mongodb+srv://ashritha97kommareddy:Ash13579@cluster0.ggx9sml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    (err) => {
        if (err) {
            console.log("Database not connected", err)
        } else {
            console.log("Database connected")
        }
    }
);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors({
    origin: 'https://nosql1.pages.dev', // <- frontend URL
    credentials: true // only if needed
  }));
  

// Routes
app.use('/auth', authRoute);
app.use('/book', bookRoute);
app.use('/crud', CRUDroute);
app.use('/feedback', feedbackRoute);
app.use('/destination', destinationRoute);


// Base route
app.get('/', (req, res) => {
    res.send("Hey World")
});

// Start server
app.listen(port, () => {
    console.log("server is connected : ", port)
});
