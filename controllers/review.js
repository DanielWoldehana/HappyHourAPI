const express = require('express')
const router = express.Router()
const CityModel = require('../models/Review')

router.get('/', (req, res) => {
    CityModel.find({}).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
    .catch(err => {
        console.error(err)
    })
})


module.exports = router