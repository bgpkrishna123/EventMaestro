const express = require("express");
const { SignUp, logIn, logout, getUserById } = require("../controlles/user");



const userRouter = express.Router();

userRouter.post("/register", SignUp);

userRouter.post("/login", logIn);

userRouter.get("/logout", logout);

userRouter.get("/:id", getUserById);

module.exports = { userRouter };