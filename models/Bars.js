const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const BarSchema = new Schema({
    city: {
        ref:"City",
        type: mongoose.Schema.Types.ObjectId
    },
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

module.exports = mongoose.model('Bar', BarSchema)