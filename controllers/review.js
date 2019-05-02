const express = require('express')
const router = express.Router()
const ReviewModel = require('../models/Review')

router.get('/', (req, res) => {
    ReviewModel.find({})
    .then((ph) => {
        res.json(ph)
        console.log(ph)
    })
    .catch(err => {
        console.error(err)
    })
})

//find all bars with a review score of the req.params or higher
router.get('/scoreGt/:number', (req, res) => {
    ReviewModel.find({score: {$gte: req.params.number}}).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
    .catch(err => {
        console.error(err)
    })
})


//to add a new review
router.post('/', (req, res) => {
    ReviewModel.create(req.body).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
    .catch(err => {
        console.error(err)
    })
})

//find a review by name then update something about it

router.put('/updateReview/:name', (req, res) => {
    ReviewModel.update({name: req.params.name}, req.body).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
    .catch(err => {
        console.error(err)
    })
})

//delete a review 
router.delete('/objectId/:ID', (req, res) => {
    ReviewModel.deleteOne({_id: req.params.ID}).then((ph) => {
        res.json(ph)
        console.log(ph)
    })
    .catch(err => {
        console.error(err)
    })
})
module.exports = router