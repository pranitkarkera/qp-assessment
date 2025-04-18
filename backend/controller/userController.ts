import { Request, Response } from "express";
import mongoose from "mongoose";
import GroceryItem from "../models/GroceryItem";

export const getAvailableGroceryItems = async (req: Request, res: Response) => {
  try {
    const items = await GroceryItem.find({ inventory: { $gt: 0 } });
    res.json(items);
  } catch (error) {
    // Assert that error is of type Error
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { items } = req.body;

    const itemIds = items.map(
      (item: any) => new mongoose.Types.ObjectId(item.itemId)
    );

    const groceryItems = await GroceryItem.find({ _id: { $in: itemIds } });

    let totalAmount = 0;
    const inventoryUpdates: any[] = []; // Use any[] to bypass type checking

    for (const item of items) {
      const groceryItem = groceryItems.find((gi) => gi._id.equals(item.itemId));
      if (!groceryItem) throw new Error(`Item ${item.itemId} not found`);
      if (groceryItem.inventory < item.quantity) {
        throw new Error(`Insufficient inventory for item ${groceryItem.name}`);
      }
      totalAmount += groceryItem.price * item.quantity;
      inventoryUpdates.push({
        updateOne: {
          filter: { _id: groceryItem._id },
          update: { $inc: { inventory: -item.quantity } },
        },
      });
    }

    await GroceryItem.bulkWrite(inventoryUpdates);

    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ error: errorMessage });
  }
};
