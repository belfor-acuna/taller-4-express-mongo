import Router from "express";
import {editUser, getUser} from "../contollers/user.controller.js"; 
import { authRequired, hasRole } from "../middlewares.js";
const router = Router();

router.put("/profile/edit/:userId", authRequired,hasRole("User"),editUser);
router.get("/profile/:userId",authRequired,hasRole("User"), getUser);

export default router;
