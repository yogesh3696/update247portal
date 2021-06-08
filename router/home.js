const express = require('express')
require('../db/mongoose')
const newNews = require('../models/newNews')
const weather = require('../utils/weahter')
const route = express.Router()

route.get('/',async (req,res)=>{
    const forecastData = weatherNew();
    const NewReport = await newNews.find({}).sort().limit(3);
        res.render('home',{
            weatherRport : forecastData,
            NewReport : NewReport
    });
});


function weatherNew(){
    const address = "Mumbai";
    weather(address,(error,forecastData)=>{
        if (error) {
            return console.log("inside else>>",error)
        }
        console.log("forecast>>>",forecastData)
        return forecastData;
    });
}

module.exports = route