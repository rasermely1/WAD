const express = require("express");
const Alumni = require("../models/alumni");
const router = express.Router();

// Get all alumni
router.get("/", async (req, res) => {
    try {
        const alumni = await Alumni.find().populate("userId", "name email");
        res.json(alumni);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

// Create or Update Alumni Profile
router.post("/", async (req, res) => {
    try {
        const { userId, graduationYear, degree, company, bio } = req.body;
        let alumni = await Alumni.findOne({ userId });

        if (alumni) {
            alumni = await Alumni.findOneAndUpdate({ userId }, { graduationYear, degree, company, bio }, { new: true });
            return res.json(alumni);
        }

        alumni = new Alumni({ userId, graduationYear, degree, company, bio });
        await alumni.save();
        res.json(alumni);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

module.exports = router;