require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, () => {
    console.log("Connected to the database");
}, e => console.error(err))

const db = mongoose.connection