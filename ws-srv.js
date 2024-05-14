// Импортируем библиотеку WebSocket
import { WebSocketServer } from 'ws';
import {v4 as uuid} from "uuid"
import { getDataFromToken } from './src/tt-srv/services/getDataFromToken.js';
import { getUserByEmail } from './src/tt-srv/requests/users.js';

const users = {}
const messages = []

const wss = new WebSocketServer({port: 8080})

wss.on("connection", (ws) => {
    
    const id = uuid()
    users[id] = ws
    console.log(`new user: ${id}`);

    ws.on("message", async (rawMessage) => {
        const messageObj = JSON.parse(rawMessage.toString())
        const message = messageObj.message
        const token = messageObj.token

        const payload = getDataFromToken(token)
        const user = await getUserByEmail({ email: payload.email })
        // console.log(user);

        messages.push({
            message: message,
            name: user[0].name,
            email: user[0].name
        })

        for(const id in users) {
            users[id].send(JSON.stringify({
                message,
                name: user[0].name,
                email: user[0].email

            }))
        }
    })

    ws.on("close", () => {
        delete users[id]

        console.log(`user is closed: ${id}`);
    })

})