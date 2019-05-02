const mongoose = require('../db/connections')
const Schema = mongoose.Schema


const ReviewSchema = new Schema({
        name: String,
        score: Number,
        review: String
})

module.exports = mongoose.model('Review', ReviewSchema)

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

