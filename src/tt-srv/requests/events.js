import db from "../db.js"

const getEventRequest = async({ id }) => {
    return (await db.query("select * from events where id=$1", [id])).rows
}

const getEventsRequest = async() => {
    return (await db.query("select * from events")).rows
}

const createEventRequest = async({ data }) => {
    return (await db.query(`
    insert into events( name, user_creator, event_start, event_end )
    values
    ( $1, $2, $3, $4 )`,
    [ data.name, data.user_creator, data.event_start, data.event_end ]
    ))
}

const deleteEventRequest = async({ id }) => {
    return (await db.query("delete from events where id=$1", [id]))
}

const addUserToEventRequest = async({ data }) => {
    return (await db.query(`
    insert into event_users( user_id, event_id )
    values
    ( $1, $2 )`,
    [data.user_id, data.event_id]
    ))
}

const removeUserToEventRequest = async({ id }) => {
    return (await db.query("delete from event_users where id=$1", [id]))
}

const eventsByUserId = async({ id }) => {
    return (await db.query("select * from rooms where user_id=$1", [id] )).rows
}

export {
    getEventRequest,
    getEventsRequest,
    createEventRequest,
    deleteEventRequest,
    addUserToEventRequest,
    removeUserToEventRequest,
    eventsByUserId
}