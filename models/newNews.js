const mongoose = require('mongoose')

const newNews  = new mongoose.Schema({
    title :{
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    url : {
        type : String,
        required : true,
        trim : true
    },
    urltoimage : {
        type : String,
        required : true,
        trim : true
    },
    publishedAt : {
        type : String,
        required : true,
        trim : true
    }
})

const NewNews = mongoose.model('addnewNews',newNews)

module.exports = NewNews