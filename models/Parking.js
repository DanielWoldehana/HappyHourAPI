const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const bars = new Schema

const ParkingSchema = new Schema({
    name: String,
    address: String,
    price: String
})

module.exports = mongoose.model('parking', ParkingSchema)