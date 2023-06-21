const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    description :{
        type:String,
    },
    image:{
        type:String,
    },
   
})
module.exports = mongoose.model('Post',postSchema)