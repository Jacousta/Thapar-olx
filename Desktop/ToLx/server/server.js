const express = require("express");
const app = express();
const approuter=require("./router/auth-router");
app.use(express.json());
app.use("/api/auth",approuter);
// app.get("/", (req, res) => {
//     res.status(200).send("Welcome to world");
// });
// app.get("/register", (req, res) => {
//     res.status(200).send("welcome ot registration page");
// });
const PORT = 5001;
app.listen(PORT, () => {console.log(`server is running at port: ${PORT}`)});