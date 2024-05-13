import db from "../db.js"

const users = async() => {
    return (await db.query("select * from users")).rows
}

const getUserRequest = async({ id }) => {
    return (await db.query("select * from users where id=$1", [id])).rows
}

const deleteUserRequest = async({ id }) => {
    await db.query("delete from users where id=$1", [id])
}

const getUserByEmail = async({ email }) => {
    const user = (await db.query("select * from users where email=$1", [email])).rows
    return user
}

const createUserRequest = async(data) => {
    const user = (await db.query("insert into users( role_id, name, surname, lastname, email, password ) values ( $1, $2, $3, $4, $5, $6 )",
    [data.roleId, data.name, data.surname, data.lastname, data.email, data.password])).rows
}

const updateUserRequest = async(data) => {
    console.log(data);
    const user = (await db.query("update users set name=$1, surname=$2, lastname=$3, email=$4, password=$5 where id=$6 returning *",
    [ data.name, data.surname, data.lastname, data.email, data.password, data.id ])).rows
    console.log(user);
}

export {
    users,
    getUserRequest,
    deleteUserRequest,
    createUserRequest,
    getUserByEmail,
    updateUserRequest
}