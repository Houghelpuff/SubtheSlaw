const Order = require("../models/order-model");

createOrder = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an order",
    });
  }

  console.log("I'm in here");

  const order = new Order({
    name: body.name,
    food: body.food,
  });

  if (!order) {
    return res.status(400).json({ success: fasle, error: err });
  }

  order
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: order._id,
        message: "Order Created!",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        err,
        message: "Order not created!",
      });
    });
};

updateOrder = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      erorr: "You must provide a body to update",
    });
  }

  await Order.findOne({ _id: req.params.id }, (err, order) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Order not found!",
      });
    }
    order.name = body.name;
    order.food = body.food;
    order
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: order._id,
          message: "Order updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Order not found.",
        });
      });
  });
};

deleteOrder = async (req, res) => {
  await Order.findOneAndDelete({ _id: req.params.id }, (err, order) => {
    if (err) {
      return res.status(400).json({ sucess: false, error: err });
    }

    if (!order) {
      return res
        .status(404)
        .json({ success: false, error: `Order for ${order.name} not found` });
    }
    return res.status(200).json({ success: true, data: order });
  }).catch((err) => console.log(err));
};

getOrderById = async (req, res) => {
  await Order.findOne({ _id: req.params.id }, (err, order) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!order) {
      return res.status(404).json({ success: false, error: `Order not found` });
    }
    return res.status(200).json({ success: true, data: order });
  }).catch((err) => console.log(err));
};

getOrders = async (req, res) => {
  await Order.find({}, (err, orders) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!orders.length) {
      return res
        .status(404)
        .json({ success: false, error: `No orders in the database` });
    }
    return res.status(200).json({ success: true, data: orders });
  }).catch((err) => console.log(err));
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrders,
  getOrderById,
};
