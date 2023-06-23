import Router from "express";
import { addInfoCV, listCV, deleteCV } from "../contollers/cv.controller.js"

const router = Router();

router.post("/edit/:userId", addInfoCV)
router.get("/", listCV)
router.delete("/delete/:cvId", deleteCV)

export default router;