const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const pSchema = new Schema({
    PackageId : {type:Number},
    PackageName : {type:String},
    Days : {type:String},
    Price : {type:Number},
    image : {type:String}
})

module.exports = mongoose.model('Package', pSchema);
