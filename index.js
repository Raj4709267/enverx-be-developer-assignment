const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { postRoutes } = require("./routes/post.routes");
require("dotenv").config;

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/posts", postRoutes);

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  try {
    await connection;
    console.log(`Connected to db successfully`);
  } catch (err) {
    console.log("Error while connecting db");
    console.log(err);
  }
});
