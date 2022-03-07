const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    phoneNumber: { type: Number, required: true, },
    email: { type: String, required: true, },
    password: { type: String, required: true, },
    isAdmin: { type: Boolean, require: true, },
    isDeleted: { type: Boolean, required: true },
    issent: { type: Boolean, required: true },
})
const User = mongoose.model("User", userSchema)

module.exports = User