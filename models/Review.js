const mongoose = require('../db/connections')
const Schema = mongoose.Schema


const ReviewSchema = new Schema({
        name: String,
        score: Number,
        review: String,
        bar: {
                ref:'Bar',
                type: mongoose.Schema.Types.Mixed
        }
})

module.exports = mongoose.model('Review', ReviewSchema)



