import express from 'express';
import {registerUser, loginUser,getMe} from "../contollers/auth.controller.js"

const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me",getMe);

export default router;
