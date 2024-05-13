import jwt from "jsonwebtoken"

const getDataFromToken = (token) => {
    const userData = jwt.verify(token, process.env.ACCESS_SECRET_KEY, function(error, decoded) {
        if(error) return {error: "Ошибка доступа"}
        return decoded
    })
    console.log(userData);

    return userData
}

export {
    getDataFromToken
}