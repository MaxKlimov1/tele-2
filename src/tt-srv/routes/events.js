import { Router } from "express";
import { removeUserToEvent } from "../controllers/events/removeUserToEvent.js";
import { getEvents } from "../controllers/events/getEvents.js";
import { getEvent } from "../controllers/events/getEvent.js";
import { deleteEvent } from "../controllers/events/deleteEvent.js";
import { createEvent } from "../controllers/events/createEvent.js";
import { addUserToEvent } from "../controllers/events/addUserToEvent.js";
import { getEventByUser } from "../controllers/events/getEventByUser.js";

const router = new Router()

router.get("/events/get", getEvents)
router.get("/events/get/:id", getEvent)
router.post("/events/post", createEvent)
router.delete("/events/delete/:id", deleteEvent)
router.post("/events/add", addUserToEvent)
router.delete("/events/remove/:id", removeUserToEvent)
router.get("/events/getEvent", getEventByUser)

export default router