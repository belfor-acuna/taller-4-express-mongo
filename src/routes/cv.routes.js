import Router from "express";
import { addInfoCV, listCV, deleteCV, addInfoCVAutomatic } from "../contollers/cv.controller.js"

const router = Router();

router.post("/edit/:userId", addInfoCV)
router.get("/:userId", listCV)
router.delete("/delete/:cvId", deleteCV)
router.post("/edit/automatic/:userId", addInfoCVAutomatic)

export default router;