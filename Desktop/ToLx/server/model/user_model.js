const mongoose = require("mongoose");
const jwt =require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
});
//json web token
userSchema.methods.generateToken= async function()
{
    try {
        return jwt.sign({            
            userId: this._id.toString(), 
            username: this.username,
            isAdmin: this.isAdmin,
 
    },
    process.env.JWT_SECRET_ID

);
    } catch (error) {
        console.error("error")
    }
};
const User =new mongoose.model("User",userSchema);
module.exports = User;