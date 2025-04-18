// controllers/adminController.ts
import { Request, Response } from "express";
import GroceryItem from "../models/GroceryItem";

export const addGroceryItem = async (req: Request, res: Response) => {
  try {
    const { name, price, inventory, category } = req.body;
    const newItem = new GroceryItem({ name, price, inventory, category });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ error: errorMessage });
  }
};

export const updateGroceryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedItem = await GroceryItem.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ error: errorMessage });
  }
};

export const manageInventory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { inventory } = req.body;
    const item = await GroceryItem.findByIdAndUpdate(
      id,
      { inventory },
      { new: true }
    );
    res.json(item);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ error: errorMessage });
  }
};

export const deleteGroceryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await GroceryItem.findByIdAndDelete(id);
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ error: errorMessage });
  }
};

export const getAllGroceryItems = async (req: Request, res: Response) => {
  try {
    const items = await GroceryItem.find();
    res.json(items);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ error: errorMessage });
  }
};
