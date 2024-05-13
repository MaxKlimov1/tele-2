import { createEventRequest } from "../../requests/events.js"
import { getDataFromToken } from "../../services/getDataFromToken.js"
import { getUserByEmail } from "../../requests/users.js"

const createEvent = async(req, res) => {
    try{

        const data = req.body
        const token = req.headers.token

        const payload = getDataFromToken(token)
        const user = await getUserByEmail({ email: payload.email })

        if(user.length < 1) {
            return res.status(500).json({
                status: "Ошибка доступа",
                errorStatus: true
            })
        }

        if(user[0].role_id !== 1) {
            return res.status(500).json({
                status: "Ошибка доступа",
                errorStatus: true
            })
        }

        await createEventRequest({ data })

        return res.json({ errorStatus: false })

    }
    catch(err) {
        return res.status(500).json({
            error: err
        })
    }
}

export {
    createEvent
}