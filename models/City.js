const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const ParkingSchema = new Schema({
    name: String,
    address: String,
    price: String
})


const BarSchema = new Schema({
    name: String,
        address: String,
        hours: String,
        phoneNumber: String,
        website: String,
        happyHour:{
            hours: String,
            hhBeerPrice: Number,
            hhWinePrice: Number,
            hhFoodPrice: Number
            },
        reviews: [
            {
                name: String,
                score: Number,
                review: String
            }
        ]
})



const CitySchema = new Schema({
    name: String,
    amountOfBars: Number,
    parking: [ParkingSchema],
    bars: [BarSchema]
})

module.exports = mongoose.model('City', CitySchema)