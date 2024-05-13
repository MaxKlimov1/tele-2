import { getRolesRequest } from "../../requests/roles.js"

const getRoles = async(req, res) => {
    try{
        return res.json({
            roles: await getRolesRequest()
        })
    }
    catch(err) {
        res.status(500).json({
            error: err
        })
    }
}

export {
    getRoles
}