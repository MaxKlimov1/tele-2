import { getUserByEmail } from "../../requests/users.js"
import { getDataFromToken } from "../../services/getDataFromToken.js"
import { eventsByUserId } from "../../requests/events.js"

const getEventByUser = async(req, res) => {
    try{
        const token = req.headers.token

        const payload = getDataFromToken(token)
        const user = await getUserByEmail({ email: payload.email })

        if(user.length < 1) return res.status(500).json({ status: "Ошибка доступа", errorStauts: true })

        const eventsList = await eventsByUserId({ id: user[0].id })

        return res.json({
            events: eventsList,
            errorStatus: false
        })
        
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({
            error: err
        })
    }
}

export {
    getEventByUser
}