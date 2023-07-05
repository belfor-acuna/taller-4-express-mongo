import express from 'express';
import {registerUser, loginUser,getMe} from "../contollers/auth.controller.js"
import { authRequired, hasRole } from '../middlewares.js';

const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me",authRequired,hasRole("User"),getMe);

export default router;
