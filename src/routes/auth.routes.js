import express from 'express';
import {registerUser, loginUser,getMe} from "../contollers/auth.controller.js"
import { authRequired } from '../middlewares.js';

const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me",authRequired,getMe);

export default router;
