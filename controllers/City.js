const express = require('express')
const router = express.Router()
const CityModel = require('../models/City')


router.get('/', (req, res) => {
    CityModel.find({}).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
})


module.exports = router