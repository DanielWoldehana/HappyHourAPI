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


module.exports = router