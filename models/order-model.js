const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema(
  {
    name: { type: String, required: true },
    food: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", Order);
