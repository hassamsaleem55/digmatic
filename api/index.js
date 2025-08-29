// const express = require("express");
// const app = express();

// // Routes
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from backend!" });
// });

// app.get("/api/users", (req, res) => {
//   res.json([
//     { id: 1, name: "Hassam" },
//     { id: 2, name: "Saleem" }
//   ]);
// });

// // ✅ Localhost only
// if (process.env.NODE_ENV !== "production") {
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Backend running locally on http://localhost:${PORT}/api`);
//   });
// }

// // ✅ Vercel expects this export
// module.exports = app;


const express = require('express');
const app = express()
const PORT = 3000

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Hassam" },
    { id: 2, name: "Saleem" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})