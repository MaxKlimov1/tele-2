import { deleteEventRequest } from "../../requests/events.js"
import { getDataFromToken } from "../../services/getDataFromToken.js"
import { getUserByEmail } from "../../requests/users.js"

const deleteEvent = async(req, res) => {
    try{
        const id = req.params.id
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

        await deleteEventRequest({ id })
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
    deleteEvent
}