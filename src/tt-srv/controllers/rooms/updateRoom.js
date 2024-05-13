import { getDataFromToken } from "../../services/getDataFromToken.js"
import { updateRoomRequest } from "../../requests/rooms.js"
import { getUserByEmail } from "../../requests/users.js"

const updateRoom = async(req, res) => {

    try{
        const token = req.headers.token
        const roomData = req.body

        const userData = getDataFromToken(token)
        
        const user = await getUserByEmail({ email: userData.email })

        await updateRoomRequest({data: {
            isBusy: roomData.isBusy,
            amount_people: roomData.amount_people,
            userId: user[0].id,
            timestampStart: String(roomData.timestampStart),
            timestampEnd: String(roomData.timestampEnd),
            roomId: roomData.roomId
        }})

        return res.json({
            status: "ok"
        })
    }
    catch(err) {
        res.status(500).json({
            error: err
        })
    }

}

export {
    updateRoom
}