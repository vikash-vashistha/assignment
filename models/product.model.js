const mongoose = require("mongoose");
const { type } = require("os");

module.exports = mongoose.model(
  "product",
  new mongoose.Schema({
    productId: { type: Number, require: true },
    quantity: {type: Number, require: true}
  })
);
