const express =require('express');
const router=express.Router();
const authController=require("../controllers/auth-controller")

// router.get("/",(req,res)=>{
//     res.status(200).send("hello");
// });
router.route("/").get(authController.home);
router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
router.route("/changepassword").post(authController.changePassword)
module.exports=router;