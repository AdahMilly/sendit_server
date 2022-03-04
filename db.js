const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/sendit', { useNewUrlParse: true })

const db = mongoose.connection