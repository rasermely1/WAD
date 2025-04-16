const mongoose = require("mongoose");

const AlumniSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    graduationYear: Number,
    degree: String,
    company: String,
    bio: String,
});

AlumniSchema.statics.createAlumni = function (alumniData) {
    return this.create(alumniData);
}
AlumniSchema.statics.findByUserId = function (userId) {
    return this.findOne({ userId });
};
AlumniSchema.statics.findById = function (id) {
    return this.findById(id);
};
AlumniSchema.statics.findAll = function () {
    return this.find();
};
AlumniSchema.statics.updateAlumni = function (id, updateData) {
    return this.findByIdAndUpdate(id, updateData, { new: true });
}
AlumniSchema.statics.deleteAlumni = function (id) {
    return this.findByIdAndDelete(id);
}

module.exports = mongoose.model("Alumni", AlumniSchema);