const mongoose = require('../db/connections')
const Schema = mongoose.Schema

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
        ],
        city: {
            ref:"City",
            type: mongoose.Schema.Types.ObjectId
        }
})

module.exports = mongoose.model('Bar', BarSchema)




