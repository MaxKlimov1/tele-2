import { addUserToEventRequest } from "../../requests/events.js"
import { getDataFromToken } from "../../services/getDataFromToken.js"
import { getUserByEmail } from "../../requests/users.js"

const addUserToEvent = async(req, res) => {
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

        const dataToRequest = {
            user_id: user[0].id,
            event_id: data.event_id
        }

        await addUserToEventRequest({ data: dataToRequest })

        return res.json({
            errorStatus: false
        })
    }
    catch(err) {
        return res.status(500).json({
            error: err
        })
    }
}

export {
    addUserToEvent
}