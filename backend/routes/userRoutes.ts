// routes/userRoutes.ts
import express from "express";
import {
  getAvailableGroceryItems,
  createOrder,
} from "../controller/userController";

const router = express.Router();

router.get("/items", getAvailableGroceryItems);
router.post("/orders", createOrder);

export default router;
