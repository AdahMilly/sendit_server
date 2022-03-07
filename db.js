const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/sendIt', () => {
    console.log("Connected to the database");
}, e => console.error(err))

const db = mongoose.connection