const express = require('express')
const parser = require('body-parser')
const cityController = require('./controllers/City')
const parkingController =require('./controllers/Parking')
const barController = require('./controllers/Bar')


const app = express()

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use('/api/city', cityController)
app.use('/api/parking', parkingController)
app.use('/api/bars', barController)

app.listen(process.env.PORT || 3000, () => console.log('NEMO00 Just keep swimming......on port 3000'))