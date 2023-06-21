const express = require('express')
const router = express.Router()
const Post = require('./createModel')

router.get('/', async (req, res) => {

    try {
        const posts = await Post.find()
        res.header('Access-Control-Allow-Origin', '*');
        res.json(posts)
    } catch (err) {
        res.send('Err' + err)
    }
})
router.post('/', async (req, res) => {
    const post = new Post({
        description: req.body.description,
        image: req.body.image
    })
    try {
        const posts = await post.save()
        res.json(posts)
    } catch (err) {
        res.send('Error')
        console.log(err)
    }
})

module.exports = router