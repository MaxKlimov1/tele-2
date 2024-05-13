import ws from "ws"
const { Server } = ws
import "dotenv/config"
import {v4 as uuid} from "uuid"

const clients = {}

const wsSrv = new Server({port: process.env.WEBSOCKET_PORT})

wsSrv.on("connection", (ws) => {

    const id = uuid()
    clients[id] = ws

    ws.on("message", (message) => {

    })

    ws.on("close", () => {
        delete clients[id]
    })

})