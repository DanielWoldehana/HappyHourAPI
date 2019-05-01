const express = require('express')
const router = express.Router()
const BarModel = require('../models/Bars')

router.get('/', (req, res) => {
    BarModel.find({}).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
    .catch(err => {
        console.error(err)
    })
})

router.get('/name/:name', (req, res) => {
    BarModel.findOne({name: req.params.name}).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
})


router.get('/hhBeerLessThen/:price', (req, res) => {
    BarModel.find({ "happyHour.hhBeerPrice": {$lt:  req.params.price}})
    .then((ph) => {
        res.json(ph)
        console.log(ph)
    })
})


router.get('/hhWineLessThen/:price', (req, res) => {
    BarModel.find({ "happyHour.hhWinePrice": {$lt:  req.params.price}})
    .then((ph) => {
        res.json(ph)
        console.log(ph)
    })
})

router.get('/hhFoodLessThen/:price', (req, res) => {
    BarModel.find({ "happyHour.hhFoodPrice": {$lt:  req.params.price}})
    .then((ph) => {
        res.json(ph)
        console.log(ph)
    })
})


router.get('/reviewScore/:score', (req, res) => {
    BarModel.find({ "reviews.score": {$gte:  req.params.score}})
    .then((ph) => {
        res.json(ph)
        console.log(ph)
    })
})


module.exports = router