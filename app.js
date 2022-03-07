const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

//db
const db = require("./db")
//routes
const authRoute = require('./API/Routes/auth.route');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use(cors());

app.use('/auth', authRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${8000}`);
})