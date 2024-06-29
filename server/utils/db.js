const mongoose=require("mongoose");
const URI =process.env.MONGODB_URI;
// mongoose.connect(URI); 
const connectDb= async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("success");
    } catch (error) {
        console.error("problem");
        process.exit(0);
    }
}
module.exports=connectDb;