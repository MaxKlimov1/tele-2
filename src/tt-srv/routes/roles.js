import { Router } from "express";
import { getRoles } from "../controllers/roles/getRoles.js";
import { getRole } from "../controllers/roles/getRole.js";

const router = new Router()

router.get("/roles/get", getRoles)
router.get("/roles/get/:id", getRole)

export default router