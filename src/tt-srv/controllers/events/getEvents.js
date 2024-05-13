import { getEventsRequest } from "../../requests/events.js"

const getEvents = async(req, res) => {
    try{
        return res.json({
            events: await getEventsRequest()
        })
    }
    catch(err) {
        return res.status(500).json({
            error: err
        })
    }
}

export {
    getEvents
}