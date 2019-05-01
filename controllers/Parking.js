const express = require('express')
const router = express.Router()
const ParkingModel = require('../models/Parking')


router.get('/', (req, res) => {
    ParkingModel.find({}).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
    .catch(err => {
        console.error(err)
    })
})



module.exports = router