const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from your EKS-deployed Node.js app!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
