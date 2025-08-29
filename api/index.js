const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Hassam" },
    { id: 2, name: "Saleem" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
