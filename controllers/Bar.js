const express = require('express')
const router = express.Router()
const BarModel = require('../models/Bar')



///All Get requests....
//Show all Bars
router.get('/', (req, res) => {
    BarModel.find({})
        .populate('reviews') 
        // .populate('parking')
       .then((ph) => {
           res.json(ph)
       })
    .catch(err => {
        console.error(err)
    })
})


//find Bar by Name 
router.get('/name/:name', (req, res) => {
    BarModel.findOne({name: req.params.name}).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
})



//find bars with the Beer HappyHour price less then req.params
router.get('/hhBeerLorE/:price', (req, res) => {
    BarModel.find({ "happyHour.hhBeerPrice": {$lte:  req.params.price}})
    .then((ph) => {
        res.json(ph)
        console.log(ph)
    })
})

//find bars with the Wine HappyHour price less then req.params
router.get('/hhWineLorE/:price', (req, res) => {
    BarModel.find({ "happyHour.hhWinePrice": {$lte:  req.params.price}})
    .then((ph) => {
        res.json(ph)
        console.log(ph)
    })
})

//find bars with the Food HappyHour price less then req.params
router.get('/hhFoodLorE/:price', (req, res) => {
    BarModel.find({ "happyHour.hhFoodPrice": {$lte:  req.params.price}})
    .then((ph) => {
        res.json(ph)
        console.log(ph)
    })
})

//add an IF condition
router.get('/barsOpenAt/:time', (req, res) => {
    BarModel.find({hours: req.params.time})
    .then((ph) =>{
        res.json(ph)
    })
})


//All POST requests 

//Add a new Bar to the Bars Array
router.post('/', (req, res) => {
    BarModel.create(req.body)
    .then((ph) =>{
        res.json(ph)
    })
})

//All PUT request 
// enter the bar name you want to change and then enter what you want to change in the req.body
router.put('/:nameOfBarToUpdate', (req, res) => {
    BarModel.findOneAndUpdate({name: req.params.nameOfBarToUpdate}, req.body)
    .then((ph) => {
        res.json(ph)
    })
})


//All Delete requests
router.delete('/deleteBar/:objectID', (req, res) => {
    BarModel.deleteOne({name: req.params.objectID})
})

module.exports = router
