require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5001;
const cors=require("cors");
const app = express();
const approuter = require("./router/auth-router");
const connectDb = require("./utils/db"); 
app.use(cors());
app.use(express.json());
app.use("/api/auth", approuter);

const PORT = 5001;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  }).on("error", (err) => {
    console.error(`Error listening on port ${PORT}: ${err}`);
  });
}).catch((err) => {
  console.error(`Error connecting to database: ${err}`);
});