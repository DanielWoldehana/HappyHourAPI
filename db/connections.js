const mongoose = require('mongoose')

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.DB_URL)
  } else {
    mongoose.connect("mongodb://localhost/happyhourDB", {useNewUrlParser: true})
  }

mongoose.Promise = Promise



module.exports = mongoose