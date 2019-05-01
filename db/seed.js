// const mongoose = require('./connections')
const CityModel = require('../models/City')
const ParkingModel = require('../models/Parking')
const BarsModel = require('../models/Bars')


// const Cityseed = require('./jsondata/city.json')
// const Barseed = require('./jsondata/bars.json')
// const Parkseed = require('./jsondata/parking.json')
const SeedObject = require('./jsondata/AllSeeds.json')

// CityModel.deleteMany({}).then(() => {
//     BarsModel.deleteMany({}).then(() => {
//         ParkingModel.deleteMany({}).then(() => {
//             CityModel.create(Cityseed).then((CityPh) => {
//                 console.log(CityPh)
//                 BarsModel.create(Barseed).then((BarPh) => {
//                     console.log(BarPh)
//                     ParkingModel.create(Parkseed).then((ParkingPh) => {
//                         console.log(ParkingPh)
//                     })
//                 })
//             })
//         })
//     })
// })
// CityModel.deleteMany({}).then(() => {
//     CityModel.create(object.city).then((CityPh) => {
//                 console.log(CityPh)
// })
// })


    // CityModel.deleteMany({}).then(() => {
    //     CityModel.create(Cityseed).then(ph => {
    //         console.log(ph)
    //         BarsModel.deleteMany({}).then(() => {
    //             BarsModel.create(Barseed).then(ph => {
    //                 console.log(ph)
    //             })
    //         })
    //         ParkingModel.deleteMany({}).then(() => {
    //             ParkingModel.create(Parkseed).then(ph => {
    //                 console.log(ph)
    //             })
    //         })
    //     })
    // })

    SeedObject.map(item => {
        CityModel.deleteMany({}).then(() => {
            CityModel.create(item.city)
            console.log(item.city)
        })
      ParkingModel.deleteMany({}).then(() => {
        ParkingModel.create(item.parking).then(ph => {
            console.log(item.parking)
        })
    })
      BarsModel.deleteMany({}).then(()=> {
        BarsModel.create(item.bars).then(ph => {
            console.log(item.bars)
        })
    })
    })

//maybe i should be using .save somewhere