const Product = require("../model/product_model");

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal server error");
  }
};

// Add a new product
const addProduct = async (req, res) => {
  try {
    const { image, name, description, price, category } = req.body;

    // Create a new product
    const newProduct = new Product({
      image,
      name,
      description,
      price,
      category
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    // Send a success response
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send("Internal server error");
  }
};

module.exports = { getProducts, addProduct };
