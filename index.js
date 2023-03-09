const express = require("express");
const connect = require("./configs/db");
const ProductRouter = require("./controller/product.controller")

const app = express();

app.use(express.json())

app.use("", ProductRouter);

app.listen(2345, async () => {
  console.log("app is running on port 2345");
  try {
    await connect()
    console.log("db is connected");
  } catch (e) {
    console.log(e.message);
  }
})