import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, tol! Backend running.");
});

app.listen(5000, () => {
  console.log("Server on port 5000");
});