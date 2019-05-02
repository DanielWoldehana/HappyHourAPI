const express = require('express')
const parser = require('body-parser')
const reviewController = require('./controllers/review')
const parkingController =require('./controllers/parking')
const barController = require('./controllers/bar')


const app = express()

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use('/api/reviews', reviewController)
app.use('/api/parking', parkingController)
app.use('/api/bar', barController)

app.listen(process.env.PORT || 3000, () => console.log('NEMO00 Just keep swimming......on port 3000'))