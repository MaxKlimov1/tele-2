import { getUserByEmail } from "../../requests/users.js"
import { getDataFromToken } from "../../services/getDataFromToken.js"
import { getRoomsByUser } from "../../requests/events.js"

const getRoomsByToken = async(req, res) => {
    try{
        const token = req.headers.token

        const payload = getDataFromToken(token)
        const user = await getUserByEmail({ email: payload.email })

        if(user.length < 1) return res.status(500).json({ status: "Ошибка доступа", errorStauts: true })

        console.log("User", user);

        const eventsList = await getRoomsByUser({ id: user[0].id })

        console.log("eventsByUser", eventsList);

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
    getRoomsByToken
}