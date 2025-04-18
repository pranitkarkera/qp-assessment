import express from "express";
import mongoose from "mongoose";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";

dotenv.config();

// let MONGODB_URL = "mongodb://pranit:pranit99@mongodb:27017/cluster0?authSource=cluster0"

const mongoDBUrl = process.env.MONGODB_URL as string;

if (!mongoDBUrl) {
  throw new Error("MONGODB_URL environment variable is not defined");
}

const app = express();
app.use(express.json());


mongoose
  .connect(mongoDBUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB", error));

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
