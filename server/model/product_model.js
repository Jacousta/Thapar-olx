const mongoose = require("mongoose");
const jwt =require("jsonwebtoken")
const productSchema = new mongoose.Schema({
 
    id:{
        type: String,
    },
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/2"
    },
    name:{
        type: String,
        require:true,
    },
    description: {
        type: String,
        require:true,
    },
    price:{
        type: Number,
        require:true,
    },
    category:{
        type: String,
        require:true,
    }
});
const Product =new mongoose.model("Product",productSchema);
module.exports = Product;