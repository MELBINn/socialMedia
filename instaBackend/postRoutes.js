const express = require('express')
const router = express.Router()
const Posts = require('./postModel')

//function executing in home route

router.get('/', async (req, res) => {

    try {
        const posts = await Posts.find()
        res.header('Access-Control-Allow-Origin', '*');
        res.json(posts)
    } catch (err) {
        res.send('Err' + err)
    }
})

// router.post('/', async (req, res) => {
//     const posts = new Posts({
//         image: req.body.image,
//         description: req.body.description
//     })

//     try {
//         const post = await posts.save()
//         res.json(post)
//     } catch (err) {
//         res.send('Error')
//     }

// })


module.exports = router