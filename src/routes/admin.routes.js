import {getUser, listUsers} from "../contollers/user.controller.js";
import { authRequired , hasRole } from '../middlewares.js';
import { listCV, deleteCV } from '../contollers/cv.controller.js';
import { Router } from "express";

const router = Router();

router.get("/:adminId/users", listUsers);
router.get("/:adminId/users/:pickedUserId", authRequired, hasRole("Admin"), getUser);
router.get("/:adminId/users/:pickedUserId/cv", authRequired, hasRole("Admin"), listCV);
router.delete("/:adminId/:pickedUserId/:cvId", hasRole("Admin"), deleteCV);

export default router;