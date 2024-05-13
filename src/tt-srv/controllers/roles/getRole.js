import { getRoleRequest } from "../../requests/roles.js"

const getRole = async(req, res) => {
    try{
        const roleId = req.params.id

        const role = await getRoleRequest({ id: roleId })

        return res.json({
            role
        })
    }
    catch(err) {
        res.status(500).json({
            error: err
        })
    }
}

export {
    getRole
}