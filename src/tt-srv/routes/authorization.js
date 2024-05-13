import { Router } from "express";
import { login } from "../controllers/authorization/login.js";

const router = new Router()

router.post("/users/login", login)

export default router