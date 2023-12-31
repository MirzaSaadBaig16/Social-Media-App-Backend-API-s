import express from "express";

import { login, registration } from "../Controllers/authController.js";

const authRoutes = express.Router();

// Login User
authRoutes.post("/login", login);

// Register User
authRoutes.post("/register", registration);

export default authRoutes;
