import Router from "express";
import {editUser, getUser} from "../contollers/user.controller.js";
const router = Router();

router.put("/profile/edit/:userId",editUser);
router.get("/profile/:userId", getUser);

export default router;
