const pool = require('../connection/db');

const getAllOrders = async () => {
  const result = await pool.query('SELECT * FROM orders');
  return result.rows;
};

const createOrder = async (order) => {
  const { product_id, quantity, total_price } = order;
  const result = await pool.query(
    'INSERT INTO orders (product_id, quantity, total_price) VALUES ($1, $2, $3) RETURNING *',
    [product_id, quantity, total_price]
  );
  return result.rows[0];
};

module.exports = { getAllOrders, createOrder };
