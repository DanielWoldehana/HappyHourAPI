const mongoose = require('../db/connections')
const Schema = mongoose.Schema


const ParkingSchema = new Schema({
        closestBar: [{
                ref:'Bar',
                type: mongoose.Schema.Types.Mixed
        }],
        name: String,
        address: String,
        phoneNumber: String,
        website: String,
        price4Day: Number
})



module.exports = mongoose.model('Parking', ParkingSchema)