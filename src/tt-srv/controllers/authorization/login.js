import { getUserByEmail } from "../../requests/users.js"
import { getToken } from "../../services/getToken.js"

const login = async(req, res) => {
    try{
        const userData = req.body
        console.log(userData, "21");

        const user = await getUserByEmail({ email: userData.email })
    
        if(user.length < 1) return res.status(500).json({ status: "Не правильный email или пароль", errorStatus: true })
    
        if( userData.password !== user[0].password ) {
            return res.status(500).json({ status: "Не правильный email или пароль", errorStatus: true })
        }
    
        const token = getToken({ name: user[0].name, email: user[0].email });
    
        return res.json({
            token,
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
    login
}