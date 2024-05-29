const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../models/product');

const getProducts = async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
};

const getProduct = async (req, res) => {
  const product = await getProductById(req.params.id);
  res.json(product);
};

const addProduct = async (req, res) => {
  const newProduct = await createProduct(req.body);
  res.json(newProduct);
};

const modifyProduct = async (req, res) => {
  const updatedProduct = await updateProduct(req.params.id, req.body);
  res.json(updatedProduct);
};

const removeProduct = async (req, res) => {
  const deletedProduct = await deleteProduct(req.params.id);
  res.json(deletedProduct);
};

module.exports = { getProducts, getProduct, addProduct, modifyProduct, removeProduct };
