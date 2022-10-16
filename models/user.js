const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    FullName: {type:String},
    EmailId: {type:String, unique: true},
    password: {type:String, required: true},
    created_at: {type:Number, default: Date.now().valueOf()}
}) 

module.exports = mongoose.model('User', userSchema);
