import Router from "express";
import { addInfoCV, listCV, deleteCV, addInfoCVAutomatic } from "../contollers/cv.controller.js"
import { authRequired, hasRole } from "../middlewares.js";

const router = Router();

router.post("/edit/:userId", authRequired, hasRole("User"),addInfoCV)
router.get("/:userId", listCV)
router.delete("/delete/:cvId", deleteCV)
router.post("/edit/automatic/:userId", addInfoCVAutomatic)

export default router;