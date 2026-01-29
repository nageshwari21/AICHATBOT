import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Serve frontend in production (Express 5 safe)
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");

  app.use(express.static(frontendPath));

  // Fallback for SPA routes
  app.use((req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// Test route
app.get("/", (req, res) => {
  res.send("Backend running from src/server.js 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
