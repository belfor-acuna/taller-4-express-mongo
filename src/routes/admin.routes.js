//delete cv admin, ruta de admin que lleven a controller de cv para borrar un cv, admin debe de tener una ruta que lo lleve al controlaor de
//cv para borrar y para listas. admin tabla con user  hace click  en el user y se listan los cv que se puedan borrar.

import {getUser, listUsers} from "../contollers/user.controller.js";
import { authRequired , hasRole } from '../middlewares.js';
import { listCV, deleteCV } from '../contollers/cv.controller.js';

const router = Router();

router.get("/:adminId/users". authRequired, hasRole("Admin"), listUsers);
router.get("/:adminId/users/:pickedUserId", authRequired, hasRole("Admin"), getUser);
router.get("/:adminId/users/:pickedUserId/cv", authRequired, hasRole("Admin"), listCV);
router.delete("/:adminId/:pickedUserId/:cvId", hasRole("Admin"), deleteCV);

export default router;