const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const ParkingSchema = new Schema({
    name: String,
    address: String,
    price: String,
    city: {
        ref: "City",
        type: mongoose.Types.ObjectId
    }
})

module.exports = mongoose.model('Parking', ParkingSchema)