const express = require("express")
const { registerUser } = require("../Controllers/auth.controller")
const router = express.Router()


router.post('/RegisterUser', registerUser)
// router.post('/loginUser', loginUser);

module.exports = router