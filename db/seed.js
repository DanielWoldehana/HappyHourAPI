const mongoose = require('./connections')
const ReviewModel = require('../models/Review')
const ParkingModel = require('../models/Parking')
const BarsModel = require('../models/Bars')


// const Cityseed = require('./jsondata/city.json')
// const Barseed = require('./jsondata/bars.json')
// const Parkseed = require('./jsondata/parking.json')
const SeedObject = require('./AllSeeds.json')

    SeedObject.map(item => {
        BarsModel.deleteMany({}).then(()=> {
            BarsModel.create(item.bars).then(ph => {
                console.log(ph)
            })
        })
        ReviewModel.deleteMany({}).then(() => {
            ReviewModel.create(item.reviews).then(ph => {
                console.log(ph)
            })
        })
      ParkingModel.deleteMany({}).then(() => {
        ParkingModel.create(item.parking).then(ph => {
            console.log(ph)
        })
    })
})



// SeedObject.map(item => {
//     CityModel.deleteMany({}).then(() => {
//         BarsModel.deleteMany({}).then(()=> {
//         CityModel.create(item.city).then((newCity) =>  {
//             console.log(newCity)
//             BarsModel.create(item.bars).then((newBars) => {
//                 console.log(newBars)
//                newCity.bars.push(newBars._id)
//                newBars.city = newCity

//                newCity.save()
//                newBars.save()
//            })
//         })
//         })
//     })
//     .catch(err => {
//         console.error(err)
//     })
// })


