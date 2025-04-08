const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./user");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.error(err));

app.use("/api/users", userRoutes);

app.listen(PORT, () => {});
