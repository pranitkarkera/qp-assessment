// models/GroceryItem.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IGroceryItem extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  price: number;
  inventory: number;
  category?: string;
}

const GroceryItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  inventory: { type: Number, required: true },
  category: { type: String },
});

export default mongoose.model<IGroceryItem>("GroceryItem", GroceryItemSchema);
