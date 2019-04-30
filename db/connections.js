const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/happyhourDB', {useNewUrlParser: true})
mongoose.Promise = Promise



module.exports = mongoose