const express = require('express')
const router = express.Router()
const User = require('./userModel')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
require('dotenv').config()

router.post('/', async (req, res) => {

    try {
        const users = await User.find({ username: req.body.username })
        const user = users[0]
        const comparisonResult = await bcrypt.compare(req.body.password, user.password);
        console.log(comparisonResult)
        if (comparisonResult === true) {
            const accessToken = jwt.sign({ username: req.body.username }, process.env.ACCESS_TOKEN_SECRET)
            console.log(accessToken)
            res.json({ accessToken: accessToken })
        }else{
            res.send("NOT VALID")
            console.log("NOT VALID")
        }
      


    } catch (err) {
        console.log(err)
        res.send(err)
    }
})
module.exports = router
