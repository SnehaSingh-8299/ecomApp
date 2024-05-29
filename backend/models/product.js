const pool = require('../connection/db');

const getAllProducts = async () => {
  const result = await pool.query('SELECT * FROM products');
  return result.rows;
};

const getProductById = async (id) => {
  const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
  return result.rows[0];
};

const createProduct = async (product) => {
  const { name, price, description } = product;
  const result = await pool.query(
    'INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *',
    [name, price, description]
  );
  return result.rows[0];
};

const updateProduct = async (id, product) => {
  const { name, price, description } = product;
  const result = await pool.query(
    'UPDATE products SET name = $1, price = $2, description = $3 WHERE id = $4 RETURNING *',
    [name, price, description, id]
  );
  return result.rows[0];
};

const deleteProduct = async (id) => {
  const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
