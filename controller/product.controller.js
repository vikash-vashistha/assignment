const express = require("express");
const Product = require("../models/product.model");

const router = express.Router();

router.post("/", async (req, res) => {
  // console.log(req.body);
  try {
    let data = await Promise.all(req.body.map(async (e, i) => {
      let item = await Product.findOne({ productId: e.productId });
      // console.log(item);
      if (e.operation === "add") {
        if (item) {
            return await Product.findOneAndUpdate({
              productId: e.productId,
              quantity: item.quantity + e.quantity,
            })
        
        } else {
          let { productId, quantity } = e;
          return await Product.create({ productId, quantity });
        }
      } else if (e.operation === "subtract") {
        if (item) {
          return await Product.findOneAndUpdate({
              productId: e.productId,
              quantity: item.quantity - e.quantity,
            })
        
        } else {
          let { productId, quantity } = e;
          return await Product.create({ productId, quantity })
        }
      }
     })
   )
    //  const product = await Product.create(req.body);

    res.status(201).send(data);
  } catch (e) {
    res.status(500).send("some error");
  }
});

module.exports = router;
