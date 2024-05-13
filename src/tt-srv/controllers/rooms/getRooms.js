import { getRoomsRequest } from "../../requests/rooms.js"

const getRooms = async(req, res) => {
    const rooms = await getRoomsRequest()
    console.log(rooms);
    return res.json({
        rooms
    })
}

export {
    getRooms
}