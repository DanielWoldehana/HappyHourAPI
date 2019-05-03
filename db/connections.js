const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://danielwoldehana:ilovemongodb22@cluster2-hlmni.mongodb.net/happyhourDB', {useNewUrlParser: true})
mongoose.Promise = Promise



module.exports = mongoose