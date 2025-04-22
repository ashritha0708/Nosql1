const router = require('express').Router();
const Package = require('../models/package-info');
const ObjectId = require('mongoose').Types.ObjectId;

router.post('/create', (req,res) => {
    const package = new Package({
        PackageId : req.body.PackageId,
        PackageName : req.body.PackageName,
        Days : req.body.Days,
        Price : req.body.Price,
        image : req.body.image 
    })
    package.save()
        .then((_) => {
            res.json({success: true, message: "Package Added Successful"})
        })
        .catch((err) => {
            res.json({success: false, message: "Package not added, Try Again"})
        })
})

router.get('/adminDashboard', (req,res) => {
    Package.find()
        .then((data) => {
            res.send(data)
        }) 
        .catch((err) => {
            res.send(err)
        })
})

router.put('/edit', (req, res, next) => {
    Package.findOne({PackageId: req.body.PackageId})
    .exec()
    .then((result) => {
        result.PackageName = req.body.PackageName;
        result.Days = req.body.Days;
        result.Price = req.body.Price;
        result.image = req.body.image;
        result.save()
            .then((_) => {
                res.json({success: true, message: "Package updated successfully"})
            })
            .catch((err) => {
                 res.json({success: false, message: "Package has not been updated due to error"})
            })
    })
})

router.delete('/delete/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);

    Package.findByIdAndRemove(req.params.id, (err,data) => {
        if(!err){
            res.send(data);
        }
        else{
            console.log(`Error in employee delete :` + JSON.stringify(err, undefined, 2));
        }
    })
})

module.exports = router;

// Package.deleteOne({PackageId: req.body.PackageId})
// .exec()
// .then((_) => {
//     res.json({success: true, message: "Package deleted successfully"})
// })
// .catch((err) => {
//     res.json({success: false, message: "Package has not been deleted due to error"})
// })