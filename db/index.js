const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/orders", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error("Connection Error:", err.message);
  });

const db = mongoose.connection;

module.exports = db;
