const express = require("express");
const cors = require("cors");
const connectDB = require("./config");
const authRoutes = require("./routes/authRoutes");
const alumniRoutes = require("./routes/alumniRoutes");
require("dotenv").config();

// Initialize Express app
const app = express();
connectDB();  // Connect to database

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/alumni", alumniRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));