import Router from "express";
import editUser from "../contollers/user.controller.js";
const router = Router();
router.put("/profile/edit/:userId",editUser);
const router = Router();
export default router;