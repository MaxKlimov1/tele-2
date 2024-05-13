import { Router } from "express";
import { getRoom } from "../controllers/rooms/getRoom.js";
import { getRooms } from "../controllers/rooms/getRooms.js";
import { updateRoom } from "../controllers/rooms/updateRoom.js";

const router = new Router()

router.get("/rooms/get", getRooms)
router.get("/rooms/get/:id", getRoom)
router.put("/rooms/put", updateRoom)

export default router