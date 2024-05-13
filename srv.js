import "dotenv/config"
import express from "express"
import cors from "cors"

import users from "./src/tt-srv/routes/users.js"
import roles from "./src/tt-srv/routes/roles.js"
import auth from "./src/tt-srv/routes/authorization.js"
import rooms from "./src/tt-srv/routes/rooms.js"
import events from "./src/tt-srv/routes/events.js"

const server = express()

server.use(express.static("src/tt-front"))
server.use(express.json())
server.use(cors())
server.use("/api", users)
server.use("/api", roles)
server.use("/api", auth)
server.use("/api", rooms)
server.use("/api", events)

const startServer = async () => {
    server.listen(process.env.SERVER_PORT, () => {
        console.log(`server started on port: ${process.env.SERVER_PORT}`)
    })
}

startServer()