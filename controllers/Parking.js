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


//Find all Parking spots by Name
router.get('/name/:name', (req, res) => {
    ParkingModel.find({name: req.params.name}).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
    .catch(err => {
        console.error(err)
    })
})


//find all parking place with a price less then or equal to req.params
router.get('/PriceLorE/:price', (req, res) => {
    ParkingModel.find({price4Day: {$lte: req.params.price}})
    .then((ph) => {
        res.json(ph)
    })
})

//All POST request
//add a new parking  spot
router.post('/newParking', (req, res) => {
    ParkingModel.create(req.body)
    .then((ph) => {
        res.json(ph)
    })
})

//All PUT requests 
//find the Parking lot by name and update anything about it by inserting it in the req.body

router.put('/updateParking/:ID', (req, res) => {
    ParkingModel.update({_id: req.params.ID}, req.body)
    .then((ph) => {
        res.json(ph)
    })
})


//All the Delete requests
//delete parking lot by objectID

router.delete('/delete/:objectId', (req, res) => {
    ParkingModel.deleteOne({_id: req.params.objectId})
    .then((ph) => {
        res.json(ph)
    })
})

module.exports = router