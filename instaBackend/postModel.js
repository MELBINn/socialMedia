const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    image: {
        type: String,

    },
    description: {
        type: String,

    }
})

module.exports = mongoose.model('Posts', postSchema)