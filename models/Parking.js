const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const bars = new Schema

const ParkingSchema = new Schema({
    name: String,
    address: String,
    phoneNumber: String,
    website: String,
    price: Number
})



module.exports = mongoose.model('Parking', ParkingSchema)