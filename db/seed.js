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


            for(let i = 0; i < AllBars.length; i++ ){ 
                BarsModel.create(AllBars[i]).then((newBar) => {
                    console.log(newBar)
                    ReviewModel.create(AllReviews[i]).then((newReview) => {
                        ParkingModel.create(AllParking[i]).then((newParking) => {
                            newBar.parking.push(newParking._id)
                            newBar.reviews.push(newReview._id)
                            newReview.bar = newBar._id
                            newBar.save()
                            newReview.save()
                            console.log(newReview)
                        })
                    })
                })
            }

        })
    })
})

// BarsModel.find({ name: "name of bar"}).then(barname => {
//     ReviewModel.create()
//     barname.reviews.push()
// })







