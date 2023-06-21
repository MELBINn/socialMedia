const express = require('express')
const router = express.Router()
const User = require('./userModel')
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    const saltRounds = 10;

    const hash = await bcrypt.hash(req.body.password, saltRounds)
    const user = new User({
        username: req.body.username,
        password: hash,
        email: req.body.email
    })
    try {
        const newUser = await user.save()
        res.header('Access-Control-Allow-Origin', '*');
        res.json(newUser)
    } catch (err) {
        res.send('Error')
    }
})
module.exports = router

