// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Ki haal chaal?");
// });

// app.listen(port, () => {
//   console.log("server started");
// });

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

// Export for Vercel (serverless function)
module.exports = app;
module.exports.handler = serverless(app);

// Run locally only
if (process.env.NODE_ENV !== "production") {
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Local backend running at http://localhost:${PORT}/api`));
}
