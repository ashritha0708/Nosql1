const router = require('express').Router();
const Booking = require('../models/booking')

router.post('/cart', (req,res) => {
    const booking = new Booking({
        pid : req.body.pid,
        name : req.body.name,
        phonenumber : req.body.phonenumber,
        countOfPeople : req.body.countOfPeople
    })
    booking.save()
        .then((_) => {
            res.json({success: true, message: "Booking Successful, Thank You"})
        })
        .catch((err) => {
            res.json({success: false, message: "Booking Unsuccessful, Try Again"})
        })
})

module.exports = router;
