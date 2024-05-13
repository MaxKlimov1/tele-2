import { Router } from "express";
import { getUsers } from "../controllers/users/getUsers.js"
import { getUser } from "../controllers/users/getUser.js";
import { createUser } from "../controllers/users/createUser.js";
import { updateUser } from "../controllers/users/updateUser.js";
import { deleteUser } from "../controllers/users/deleteUser.js";

const router = new Router()

router.get("/users/get", getUsers)
router.get("/users/get/:id", getUser)
router.post("/users/post", createUser)
router.put("/users/put", updateUser)
router.delete("/users/delete/:id", deleteUser)

export default router