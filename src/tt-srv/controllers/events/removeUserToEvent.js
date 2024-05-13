import { getDataFromToken } from "../../services/getDataFromToken.js"
import { getUserByEmail } from "../../requests/users.js"
import { removeUserToEventRequest } from "../../requests/events.js"

const removeUserToEvent = async(req, res) => {
    try{
        const eventUsersId = req.params.id
        const token = req.headers.token

        const payload = getDataFromToken(token)
        const user = await getUserByEmail({ email: payload.email })

        if(user.length < 1) {
            return res.status(500).json({
                status: "Ошибка доступа",
                errorStatus: true
            })
        }

        await removeUserToEventRequest({ id: eventUsersId })
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
    removeUserToEvent
}