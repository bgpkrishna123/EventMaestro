const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.schema");
const { Blacklist } = require("../models/blacklist.Schema");

require("dotenv").config();

const SignUp = async (req, res) => {
  const { username, email, role, password, profilePicture, eventsBooked } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(401).json({ msg: "User is already registered. Please try to login." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      role: role || 'user',
      password: hashedPassword,
      profilePicture,
      eventsBooked: eventsBooked || []
    });

    await newUser.save();
    return res.status(201).json({ msg: "User registered successfully." });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ msg: "Failed to register user. Please provide correct details." });
  }
};

const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: "User not found. Please provide correct credentials." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Please provide correct credentials." });
    }

    const token = jwt.sign(
      { email, role: user.role, userID: user._id, username: user.username },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token, role: user.role });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ msg: "Please provide correct details." });
  }
};

const forgotPassword = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found. Please try to log in." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ msg: "Password updated successfully. Please try to login." });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Failed to update password. Please try again later." });
  }
};

const logout = async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];

  try {
    const blacklistToken = new Blacklist({ token });
    await blacklistToken.save();
    return res.status(201).json({ msg: "User logged out successfully." });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ msg: error.message });
  }
};

module.exports = { SignUp, logIn, forgotPassword, logout };
