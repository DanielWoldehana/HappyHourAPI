const express = require('express')
const router = express.Router()
const ParkingModel = require('../models/Parking')

//ALL get Requests

//Show all parking garage
router.get('/', (req, res) => {
    ParkingModel.find({}).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
    .catch(err => {
        console.error(err)
    })
})


//find all parking place with a price less then req.params
router.get('/PriceLessThen/:price', (req, res) => {
    ParkingModel.find({price: {$lt: req.params.price}})
    .then((ph) => {
        res.json(ph)
    })
})

//All POST request
//add a new parking  spot

router.post('/newParkingLot', (req, res) => {
    ParkingModel.create(req.body)
    .then((ph) => {
        res.json(ph)
    })
})

//All PUT requests 
//find the Parking lot by name and update anything about it by inserting it in the req.body

router.put('/updateParkingLot/:name', (req, res) => {
    ParkingModel.findOneAndUpdate({name: req.params.name}, req.body)
    .then((ph) => {
        res.json(ph)
    })
})


//All the Delete requests
//delete parking lot by objectID

router.delete('/parkingLotId/:objectId', (req, res) => {
    ParkingModel.deleteOne({_id: req.params.objectId})
    .then((ph) => {
        res.json(ph)
    })
})

module.exports = router