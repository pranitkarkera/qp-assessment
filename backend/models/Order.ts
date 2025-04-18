// models/Order.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IOrderItem {
  itemId: mongoose.Types.ObjectId;
  quantity: number;
}

export interface IOrder extends Document {
  userId: mongoose.Types.ObjectId;
  items: IOrderItem[];
  totalAmount: number;
  status: "pending" | "completed" | "cancelled";
}

const OrderSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      itemId: {
        type: Schema.Types.ObjectId,
        ref: "GroceryItem",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
});

export default mongoose.model<IOrder>("Order", OrderSchema);
