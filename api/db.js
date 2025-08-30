import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Missing MONGODB_URI");

  try {
    const conn = await mongoose.connect(uri, {
      dbName: process.env.MONGODB_DB,
    });
    isConnected = conn.connections[0].readyState === 1;
    console.log("MongoDB Connected:", conn.connection.host);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    throw err;
  }
};

export default connectDB;
