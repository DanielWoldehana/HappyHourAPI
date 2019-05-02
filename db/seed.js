const mongoose = require('./connections')
const ReviewModel = require('../models/Review')
const ParkingModel = require('../models/Parking')
const BarsModel = require('../models/Bar')


const AllBars = require('./seeddata.json')
const AllReviews = require('./reviews.json')
const AllParking = require('./parking.json')


BarsModel.deleteMany({}).then(() => {
    ReviewModel.deleteMany({}).then(() => {
        ParkingModel.deleteMany({}).then(() => {
    for(let i = 0 ; i < AllBars.length; i++){
        console.log(AllBars.length)
    BarsModel.create(AllBars[i]).then((newBar) => {
        ReviewModel.create(AllReviews[i]).then((newReview) => {
            ParkingModel.create(AllParking[i]).then((newParking) => {
            newBar.reviews.push(newReview._id)
            newBar.parking.push(newParking.address)
            newBar.save()
            console.log(newBar)
        })
        })
    })
}
})
})
})




