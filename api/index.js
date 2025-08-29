// api/index.js
const express = require("express");
const serverless = require("serverless-http");

const app = express();

// Example routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Hassam" },
    { id: 2, name: "Saleem" }
  ]);
});

// Export handler for Vercel
module.exports = app;
module.exports.handler = serverless(app);

// Only run locally with `node api/index.js`
if (process.env.NODE_ENV !== "production") {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Local backend running at http://localhost:${PORT}/api`);
  });
}
