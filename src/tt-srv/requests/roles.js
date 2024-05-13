import db from "../db.js"

const getRoleRequest = async({ id }) => {
    console.log(id);
    const role = (await db.query("select * from roles where id=$1", [id])).rows
    return role
}

const getRolesRequest = async() => {
    const roles = (await db.query("select * from roles")).rows
    return roles
}

const createRoleRequest = async({ data }) => {
    const role = (await db.query("insert into roles(name) values ($1)", [data.name])).rows
    return role
}

const updateRoleRequest = async({ data }) => {

}

const deleteRoleRequest = async({ id }) => {

}

export {
    getRoleRequest,
    getRolesRequest,
    createRoleRequest
}