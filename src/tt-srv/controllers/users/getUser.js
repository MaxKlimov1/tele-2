import { getUserRequest, getUserByEmail } from "../../requests/users.js"
import { getDataFromToken } from "../../services/getDataFromToken.js"

const getUser = async (req, res) => {
    try {
        const token = req.headers.token

        const userPayload = getDataFromToken(token)
        if(userPayload?.error) return res.status(500).json({ status: "Ошибка доступа", errorStatus: true })

        const user = await getUserByEmail({ email: userPayload.email })
        return res.json({
            user,
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
    getUser
}