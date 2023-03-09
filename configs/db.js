const mongoose = require('mongoose');

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://vikashvashistha:spiderman@cluster0.nwbzgiz.mongodb.net/newassignment"
  );
}