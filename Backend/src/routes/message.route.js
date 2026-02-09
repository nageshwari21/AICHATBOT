import express from "express";
import {
  getAllContacts,
  getChatPartners,
  getMessagesByUserId,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
// import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

/**
 * Apply auth middleware to all routes below
 * (cleaner + safer)
 */
router.use(protectRoute);
// router.use(arcjetProtection, protectRoute); // enable later if needed

// routes
router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessagesByUserId);
router.post("/send/:id", sendMessage);

export default router;
