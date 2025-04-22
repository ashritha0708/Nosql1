const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    pid: {type:String},
    name: {type:String},
    phonenumber: {type:String},
    countOfPeople: {type:Number},
    purchased_at: {type:Number, default: Date.now().valueOf()}
})

module.exports = mongoose.model('Booking', bookingSchema);