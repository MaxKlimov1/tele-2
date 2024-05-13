import { getEventRequest } from "../../requests/events.js"

const getEvent = async(req, res) => {
    try{
        const eventId = req.params.id
        const event = await getEventRequest({id: eventId})

        return res.json({
            event: event[0]
        })

    }
    catch(err) {
        return res.status(500).json({
            error: err
        })
    }
}

export {
    getEvent
}