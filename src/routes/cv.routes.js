import Router from "express";
import { addInfoCV, listCV, deleteCV, addInfoCVAutomatic } from "../contollers/cv.controller.js"
import { authRequired, hasRole } from "../middlewares.js";

const router = Router();

router.post("/edit/:userId", authRequired, hasRole("User"),addInfoCV);
router.get("/:userId", authRequired,hasRole("User"),listCV);
router.delete("/delete/:cvId",authRequired,hasRole("User"),deleteCV);
router.post("/edit/automatic/:userId",authRequired,hasRole("User"), addInfoCVAutomatic);

export default router;