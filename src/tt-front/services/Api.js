

class Api {
    
    constructor() {
        this.host = "http://localhost:"
        this.port = "3002"
    }

    getUser = async(token) => {
        const user = await fetch(this.host + this.port + "/api/users/get/1", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "token": token
            }
        })
        const json = await user.json()
        return json
    }

    login = async(data) => {
        const user = await fetch(this.host + this.port + "/api/users/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await user.json()
        return json
    }

    registration = async(data) => {
        const user = await fetch(this.host + this.port + "/api/users/post", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await user.json()
        return json
    }

    getRoom = async(id) => {
        const room = await fetch(this.host + this.port + `/api/rooms/get/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const json = await room.json()
        return json
    }

    getRooms = async() => {
        const rooms = await fetch(this.host + this.port + `/api/rooms/get`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const json = await rooms.json()
        console.log(json);
        return json
    }

    updateRoom = async(data) => {
        const token = localStorage.getItem("token")
        const user = await fetch(this.host + this.port + "/api/rooms/put", {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "token": token
            },
            body: JSON.stringify(data)
        })
        const json = await user.json()
        return json
    }

    getEvent = async(id) => {
        const rooms = await fetch(this.host + this.port + `/api/events/get/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const json = await rooms.json()
        return json
    }

    getEvents = async() => {
        const rooms = await fetch(this.host + this.port + `/api/events/get`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const json = await rooms.json()
        return json
    }

    addUserToEvent = async(data) => {
        const token = localStorage.getItem("token")
        const user = await fetch(this.host + this.port + "/api/events/add", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "token": token
            },
            body: JSON.stringify(data)
        })
        const json = await user.json()
        return json
    }

    getEventsByUser = async() => {
        const token = localStorage.getItem("token")
        const rooms = await fetch(this.host + this.port + `/api/events/getEvent`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "token": token
            }
        })
        const json = await rooms.json()
        return json
    }

}

export {
    Api
}