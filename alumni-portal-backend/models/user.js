const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["alumni", "admin"], default: "alumni" },
});

module.exports = mongoose.model("User", UserSchema);