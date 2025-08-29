// api/index.js
const express = require("express");
const serverless = require("serverless-http");

const app = express();

// Routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Hassam" },
    { id: 2, name: "Saleem" }
  ]);
});

// Export for Vercel
module.exports = serverless(app);

// Run locally with `node api/index.js`
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Local backend running at http://localhost:${PORT}/api`);
  });
}
