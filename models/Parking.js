const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const ParkingSchema = new Schema({
    city: {
        ref: "City",
        type: mongoose.Schema.Types.ObjectId
    },
    name: String,
    address: String,
    price: String
})

// module.exports = mongoose.model('Parking', ParkingSchema)