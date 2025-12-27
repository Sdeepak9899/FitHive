import express from 'express';
import {  googleLogin, login, logout,  register } from '../controller/authController.js';
// import { isAuth } from '../middleware/adminAuth.js';

const authRoutes = express.Router();

authRoutes.post("/register",register);
authRoutes.post("/login",login );
authRoutes.post("/logout",logout);
authRoutes.post("/googleLogin",googleLogin);
// authRoutes.get("/profile",isAuth,profile);

// authRoutes.post("/adminLogin",adminLogin);

export default authRoutes;