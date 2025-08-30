import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import bannerRoutes from "./routes/banner.js";
import serverless from "serverless-http";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connectDB();

app.use(bannerRoutes);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });
}

export const handler = serverless(app);
