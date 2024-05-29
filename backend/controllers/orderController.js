const { getAllOrders, createOrder } = require('../models/order');

const getOrders = async (req, res) => {
  const orders = await getAllOrders();
  res.json(orders);
};

const addOrder = async (req, res) => {
  const newOrder = await createOrder(req.body);
  res.json(newOrder);
};

module.exports = { getOrders, addOrder };
