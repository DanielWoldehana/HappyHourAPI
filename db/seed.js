const mongoose = require('./connections')
const CityModel = require('../models/City')
const ParkingModel = require('../models/Parking')
const BarsModel = require('../models/Bars')


const Cityseed = require('./jsondata/city.json')
const Barseed = require('./jsondata/bars.json')
const Parkseed = require('./jsondata/parking.json')


CityModel.deleteMany({}).then(() => {
    BarsModel.deleteMany({}).then(() => {
        ParkingModel.deleteMany({}).then(() => {
            CityModel.create(Cityseed).then((CityPh) => {
                console.log(CityPh)
                BarsModel.create(Barseed).then((BarPh) => {
                    console.log(BarPh)
                    ParkingModel.create(Parkseed).then((ParkingPh) => {
                        console.log(ParkingPh)
                    })
                })
            })
        })
    })
})

// CityModel.deleteMany({}).then(() => {
//     CityModel.create(Cityseed).then((ph) => {
//         console.log(ph)
        
//     })
//     .catch(err => {
//         console.error(err)
//     })
// })