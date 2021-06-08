const path = require("path")
const express = require('express')
const homeRoute = require('../router/home')

const app = express()
const port = process.env.port || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended : false }))

//add comma in path
const publicDirectoryPath = path.join(__dirname,"../view")
const viewsPath = path.join(__dirname,"../view/html")

app.set('view engine','ejs')
app.set('views',viewsPath)
app.use(express.static(publicDirectoryPath))

app.use(homeRoute)

app.listen(port,()=>{
    console.log("Server started at port ",port);
})