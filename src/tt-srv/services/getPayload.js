

const getPayloadAndTimeOfLive = ({ name, email }) => {
    const payload = {
        email
    }
    const options = {
        expiresIn: process.env.TIME_OF_LIVE
    }

    return {
        payload,
        options
    }
}

export {
    getPayloadAndTimeOfLive
}