// routes/adminRoutes.ts
import express from "express";
import {
  addGroceryItem,
  getAllGroceryItems,
  updateGroceryItem,
  manageInventory,
  deleteGroceryItem,
} from "../controller/adminController";

const router = express.Router();

router.post("/items", addGroceryItem);
router.get("/items", getAllGroceryItems);
router.put("/items/:id", updateGroceryItem);
router.put("/items/:id/inventory", manageInventory);
router.delete("/items/:id", deleteGroceryItem);

export default router;
