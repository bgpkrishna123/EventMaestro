const express = require("express");
const { SignUp, logIn, logout } = require("../controlles/user");



const userRouter = express.Router();

userRouter.post("/register", SignUp);

userRouter.post("/login", logIn);

userRouter.get("/logout", logout);

module.exports = { userRouter };