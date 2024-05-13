import { updateUserRequest, getUserByEmail } from "../../requests/users.js"
import { getDataFromToken } from "../../services/getDataFromToken.js";

const updateUser = async(req, res) => {
    try {
        const token = req.headers.token
        const userData = req.body
    
        const userPayload = getDataFromToken(token)
        if(userPayload?.error) return res.status(500).json({ status: "Ошибка доступа" })
    
        const user = await getUserByEmail({ email: userPayload.email })
    
        userData.id = user[0].id
    
        const updateUser = await updateUserRequest(userData)
    
        res.json({
            status: "ok"
        })
    }
    catch(err) {
        return res.status(500).json({
            error: err
        })
    }
}

export {
    updateUser
}