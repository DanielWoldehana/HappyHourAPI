const mongoose = require('./connections')
const CityModel = require('../models/City')
const ParkingModel = require('../models/Parking')
const BarsModel = require('../models/Bars')


const Cityseed = require('./jsondata/city.json')
const Barseed = require('./jsondata/bars.json')
const parkseed = require('./jsondata/parking.json')


CityModel.deleteMany({}).then(() => {
    BarsModel.deleteMany({}).then(() => {
        ParkingModel.deleteMany({}).then(() => {
            CityModel.create(Cityseed).then((ph) => {
                console.log(ph)
            })
            .catch(err => {
                console.error(err)
            })
        })
    })
})