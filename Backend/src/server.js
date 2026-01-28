const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;



// Test route
app.get("/", (req, res) => {
  res.send("Backend running from src/server.js 🚀");
});






// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
