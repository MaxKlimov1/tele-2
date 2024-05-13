import db from "../db.js"

const getRoomRequest = async({ id }) => {
    const room = (await db.query("select * from rooms where id=$1", [ id ])).rows
    return room
}

const getRoomsRequest = async() => {
    const rooms = (await db.query("select * from rooms order by id")).rows
    return rooms
}

const updateRoomRequest = async({ data }) => {
    await db.query("update rooms set is_busy=$1, amount_people=$2, user_id=$3, timestamp_start=$4, timestamp_end=$5 where id=$6",
    [data.isBusy, data.amount_people, data.userId, data.timestampStart, data.timestampEnd, data.roomId])
}  

export {
    getRoomRequest,
    getRoomsRequest,
    updateRoomRequest
}