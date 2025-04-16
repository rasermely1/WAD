const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["alumni", "admin"], default: "alumni" },
});
UserSchema.statics.createUser = function (userData) {
    return this.create(userData);
}



UserSchema.statics.findByEmail = function (email) {
    return this.findOne({ email });
};
UserSchema.statics.findById = function (id) {
    return this.findById(id);
};
module.exports = mongoose.model("User", UserSchema);