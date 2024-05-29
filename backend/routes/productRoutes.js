const express = require('express');
const { getProducts, getProduct, addProduct, modifyProduct, removeProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', addProduct);
router.put('/:id', modifyProduct);
router.delete('/:id', removeProduct);

module.exports = router;
