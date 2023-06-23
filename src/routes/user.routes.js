import editUser from "../contollers/user.controller.js";
import {Router} from "express";

const router = Router();
router.put("/profile/edit/:userId",editUser);

export default router;