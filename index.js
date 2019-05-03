const express = require('express')
const parser = require('body-parser')
const reviewController = require('./controllers/reviewController')
const parkingController =require('./controllers/parkingController')
const barController = require('./controllers/barController.js')

const app = express()
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

//All my Main Routes
app.use('/api/reviews', reviewController)
app.use('/api/parking', parkingController)
app.use('/api/bar', barController)
app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () => {
    console.log(`Neeemooo Just Keep Swimming on ....✅ PORT: ${app.get("port")} 🌟`)
  })