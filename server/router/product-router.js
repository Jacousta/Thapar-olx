const express = require('express');
const router = express.Router();
const productController = require("../controllers/product-controller");

// Fetch all products
router.get("/", productController.getProducts);

// Add a new product
router.post("/", productController.addProduct);

module.exports = router;
