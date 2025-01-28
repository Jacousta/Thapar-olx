require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/db");
const authRouter = require("./router/auth-router");
const productRouter = require("./router/product-router"); 

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter); 

// Connect to MongoDB
connectDb()
  .then(() => {
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Error connecting to database: ${err}`);
    process.exit(1); // Exit process on database connection error
  });
