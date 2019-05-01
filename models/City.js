const mongoose = require('../db/connections')
const Schema = mongoose.Schema


const CitySchema = new Schema({
    name: String,
    amountOfBars: Number,
    bars:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Bar'
    }]
})

module.exports = mongoose.model('City', CitySchema)

// const mongoose = require('../db/connections')
// const Schema = mongoose.Schema


// const ParkingSchema = new Schema({
//     name: String,
//     address: String,
//     price: String
// })



// const CitySchema = new Schema({
//     name: String,
//     amountOfBars: Number,
//     parkingSpot: [ParkingSchema],
//     barsAround: [{
//         type: Schema.Types.ObjectId,
//         ref: 'bar'
//     }]
// })

// let citySchema = mongoose.model('city', CitySchema)

// module.exports = citySchema


