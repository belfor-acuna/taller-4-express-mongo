import express from 'express';
import {registerUser} from "../contollers/auth.controller.js"

const router = express.Router();

router.post("/register", registerUser);

export default router;
