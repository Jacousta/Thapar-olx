const User = require("../model/user_model");
const bcrypt = require("bcryptjs");

// Home controller
const home = async (req, res) => {
    try {
        res.status(200).send("hello");
    } catch (error) {
        console.error("error", error);
        res.status(500).send("Internal server error");
    }
};

// Register controller
const register = async (req, res) => {
    try {
        const { username, password} = req.body;

        // Check if the user already exists
        const userExist = await User.findOne({ username });
        if (userExist) {
            return res.status(400).send("User already exists");
        }
        // Hash the password
        const saltRound = 10;
        const hash = await bcrypt.hash(password, saltRound);

        // Create the new user
        const userCreated = await User.create({
            username,
            password: hash,
        });

        // Send a success response
        res.status(200).json({ 
            message: "User registered successfully", 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString() 
        });
    } catch (error) {
        console.error("error", error);
        res.status(500).send("Internal server error");
    }
};

// Login controller
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the user exists
        const userLogged = await User.findOne({username });
        if (!userLogged) {
            return res.status(400).send("Invalid Credentials");
        }

        // Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, userLogged.password);
        if (isPasswordMatch) {            
            // Send a success response
            res.status(200).json({
                message: "Login Successful",
                token: await userLogged.generateToken(),
                userId: userLogged._id.toString(),
            });
        }
        else{
            res.status(401).json({msg:"inavild username or password"})
        }
    } catch (error) {
        console.error("error", error);
        res.status(500).send("Internal server error");
    }
};
module.exports = { home, register, login };
