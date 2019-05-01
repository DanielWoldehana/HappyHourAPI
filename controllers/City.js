const express = require('express')
const router = express.Router()
const CityModel = require('../models/City')
const seed = require('../db/jsondata/AllSeeds.json')
const BarModel = require('../models/Bars')

router.get('/', (req, res) => {
    CityModel.find({}).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
    .catch(err => {
        console.error(err)
    })
})


router.post('/', (req, res) =>   {
    CityModel.create(req.body.city).then((newCity) => {
        BarModel.create(req.body.bars).then((newBar) => {
            newCity.bars.push(newBar._id)
            newBar.LocatedCity.push(newCity)
            newCity.save()
            newBar.save()

            res.json(newCity)

        })
    })
    .catch(err => {
        console.error(err)
    })
})

module.exports = router