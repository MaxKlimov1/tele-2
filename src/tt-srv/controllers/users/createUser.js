import { createUserRequest, getUserByEmail } from "../../requests/users.js"
import { getToken } from "../../services/getToken.js"

const createUser = async (req, res) => {
    try {
        const { name, surname, lastname, email, password } = req.body

        const token = getToken({
            name, email
        })

        const getUser = await getUserByEmail({ email })
        console.log(getUser);

        if (getUser.length > 0) {
            return res.status(500).json({
                error: "Пользователь с данным email уже зарегестрирован",
                errorStatus: true
            })
        }

        const user = await createUserRequest({
            roleId: 2,
            name,
            surname,
            lastname,
            email,
            password
        })

        return res.json({
            token,
            errorStatus: false
        })
    }
    catch (err) {
        return res.status(500).json({
            error: err
        })
    }
}

export {
    createUser
}