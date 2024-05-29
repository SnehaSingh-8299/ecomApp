const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432, // PostgreSQL default port
});


pool.on('connect', () => {
    console.log('Connected to the database');
  });
  
  pool.on('error', (err) => {
    console.error('Database connection error:', err.message);
  });
  
  pool.connect()
    .then(() => console.log('Database connection established'))
    .catch(err => console.error('Error connecting to database:', err.message));
  
// Query function to execute SQL queries
const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
};

module.exports = { pool, query };
