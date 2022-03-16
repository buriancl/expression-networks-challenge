const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

const building = require("./routes/building");

connectDB();

app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

app.use("/api/building", building);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
