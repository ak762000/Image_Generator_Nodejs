const path = require('path')
const express = require('express')
const exp = require('constants')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const router = require('./routes/openaiRoutes')

const app = express()

//Enable body parser
app.use(express.json())
app.use(express.urlencoded({extended : false}))

//Set static folder
app.use(express.static(path.join(__dirname,'public')))

//Set routers
app.use('/openai', router);

//Listen to port server
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})

