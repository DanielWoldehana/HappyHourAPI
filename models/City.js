const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const CitySchema = new Schema({
    name: String,
    amountOfBars: Number,
    parking: [
        {
            ref: "Parking",
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    bars: [
        {
            ref: "Bar",
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

module.exports = mongoose.model('City', CitySchema)