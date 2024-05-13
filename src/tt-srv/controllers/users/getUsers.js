import db from "../../db.js"
import { users, getUserByEmail } from "../../requests/users.js"
import { getDataFromToken } from "../../services/getDataFromToken.js"

const getUsers = async(req, res) => {
    try{
        const token = req.headers.token

        const userPayload = getDataFromToken(token)
        if(userPayload?.error) return res.status(500).json({ status: "Ошибка доступа" })

        const user = await getUserByEmail({ email: userPayload.email })

        if(user[0].role_id !== 1) return res.status(500).json({ status: "Ошибка доступа" })

        const usersList = await users()

        return res.json({
            usersList
        })
    }
    catch(err) {
        return res.status(500).json({
            error: err
        })
    }
}

export {
    getUsers
}