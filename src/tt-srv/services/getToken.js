import jwt from "jsonwebtoken";
import { getPayloadAndTimeOfLive } from "./getPayload.js";

const getToken = ({ name, email }) => {

    console.log(email, name);

    const payloadAndTime = getPayloadAndTimeOfLive({
        name,
        email
    })

    const token = jwt.sign(payloadAndTime.payload, process.env.ACCESS_SECRET_KEY, payloadAndTime.options);
    return token
}

export {
    getToken
}