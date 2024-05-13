import { deleteUserRequest } from "../../requests/users.js"

const deleteUser = async(req, res) => {
    try{
        const userId = req.params.id

        await deleteUserRequest({id: userId})
        return res.json()
    }
    catch(err){
        return res.status(500).json({
            error: err
        })
    }
}

export {
    deleteUser
}