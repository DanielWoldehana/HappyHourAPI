const mongoose = require('../db/connections')
const Schema = mongoose.Schema


const BarSchema = new Schema({
        name: String,
        image: String,
        address: String,
        hours: {
            monday: String,
            tuesday: String,
            wednesday: String,
            thursday: String,
            friday: String,
            saturday: String,
            sunday: String
        },
        phoneNumber: String,
        website: String,
        happyHour:{
            hours: String,
            hhBeerPrice: Number,
            hhWinePrice: Number,
            hhmixedDrink: Number,
            hhFoodPrice: Number,
            hhShotsPrice: Number
            },
        reviews:[{
            ref: 'Review',
            type:mongoose.Schema.Types.ObjectId
        }],
        parking:[{
            ref: 'Parking',
            type:mongoose.Schema.Types.Mixed
        }]
})

module.exports = mongoose.model('Bar', BarSchema)




