const mongoose = require("mongoose");

const AlumniSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    graduationYear: Number,
    degree: String,
    company: String,
    bio: String,
});

module.exports = mongoose.model("Alumni", AlumniSchema);