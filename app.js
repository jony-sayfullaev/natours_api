const express = require("express");
const app = express();
const fs = require("fs");
// dotenv
const dotenv = require("dotenv");
dotenv.config();

// Route
app.get("/", (req, res) => {
  res.status(200).json({ status: "success" });
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);
});

//
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});
