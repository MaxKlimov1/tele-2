import { getRoomRequest } from "../../requests/rooms.js"

const getRoom = async(req, res) => {
    const id = req.params.id

    const room = await getRoomRequest({ id })

    return res.json({
        room
    })
}

export {
    getRoom
}