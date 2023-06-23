<<<<<<< HEAD
import editUser from "../contollers/user.controller.js";
import {Router} from "express";

const router = Router();
router.put("/profile/edit/:userId",editUser);

=======
import Router from "express";
import editUser from "../contollers/user.controller.js";
const router = Router();
router.put("/profile/edit/:userId",editUser);
const router = Router();
>>>>>>> 7d697d64880abee5911cee432dd17c25598c8d2b
export default router;