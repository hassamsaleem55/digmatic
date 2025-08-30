// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./db.js";
// import bannerRoutes from "./routes/banner.js";
// import serverless from "serverless-http";

// dotenv.config();

// const app = express();
// app.use(express.json());

// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// await connectDB();

// app.use(bannerRoutes);
// app.get("/", (_req, res) =>
//   res.json({ success: true, message: "Welcome to backend" })
// );

// export default serverless(app);

// if (process.env.NODE_ENV === "development") {
//   const PORT = process.env.PORT;
//   app.listen(PORT, () => {
//     console.log(`Local server running on http://localhost:${PORT}`);
//   });
// }

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import bannerRoutes from "./routes/banner.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connectDB();

// app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/", (req, res) =>
  res.json({ success: true, message: "Welcome to backend" })
);

app.use(bannerRoutes);
app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;
