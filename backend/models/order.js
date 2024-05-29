const pool = require('../connection/db');

// Create the orders table if it doesn't exist
const createOrdersTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      product_id INT NOT NULL,
      quantity INT NOT NULL,
      total_price DECIMAL(10, 2) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(createTableQuery);
};

const getAllOrders = async () => {
  await createOrdersTable();
  const result = await pool.query('SELECT * FROM orders');
  return result.rows;
};

const createOrder = async (order) => {
  await createOrdersTable();
  const { product_id, quantity, total_price } = order;
  const result = await pool.query(
    'INSERT INTO orders (product_id, quantity, total_price) VALUES ($1, $2, $3) RETURNING *',
    [product_id, quantity, total_price]
  );
  return result.rows[0];
};

module.exports = { getAllOrders, createOrder };
