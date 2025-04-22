const router = require('express').Router();
const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth')
router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err,hash) => {
        if(err) {
            return res.json({success:false, message: "Hashing issue"})
        }
        else {
            const user = new User({
                FullName: req.body.FullName,
                EmailId: req.body.EmailId,
                password: hash,
            })
            user.save()
                .then((_) =>{
                    res.json({success: true, message: "account has been created"})
                })
                .catch((err) => {
                    if(err.code === 11000){
                        return res.json({success: false, message: "Email already exists"})
                    }
                    res.json({success: false, message: "Auth Failed"})
                })
        }
    })
});

router.post('/login', (req, res) => {
    User.find({EmailId: req.body.EmailId})
    .exec()
    .then((result) => {
        if(result.length < 1){
            return res.json({success: false, message: "User not found"})
        }
        const user = result[0];
        bcrypt.compare(req.body.password, user.password, (err, ret) => {
            if(ret){
                const payload = {
                    userId: user._id
                }
                const token = jwt.sign(payload, "webBatch")
                return res.json({success: true, token: token, message: "Login successful"})
            }else{
                return res.json({success:false, message:"Password do not match"})
            }
        })
    }).catch(err => {
        res.json({success: false, message: "Auth failed"})
    })
})

router.get('/dashboard', checkAuth, (req,res) => {
    const userId = req.userData.userId;
    User.findById(userId)
    .exec()
    .then((result) =>{
        res.json({success: true, data: result})
    }).catch(err =>{
        res.json({success: false, message:"Server Error"})
    })
})

module.exports = router