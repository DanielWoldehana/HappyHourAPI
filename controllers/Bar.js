const express = require('express')
const router = express.Router()
const CityModel = require('../models/City')

router.get('/', (req, res) => {
    CityModel.find({bars: "name of bar"}).then((ph) => {
        res.json(ph)
    })
})


module.exports = router