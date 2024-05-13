import { Component } from "../Components/Component.js"
import { Api } from "../services/api.js"
import { getTokenFromLocalStorage } from "../services/getAndSetToken.js"

class Core {

    api = new Api()

    requests = {
        getUser: this.api.getUser(getTokenFromLocalStorage()),
        getRoom: async function(id) {
            const room = await this.api.getRoom(id)
            return room
        },
        getRooms: this.api.getRooms()
    }

    main = document.querySelector(".main")

    header = document.querySelector(".header-container")

    footer = document.querySelector(".footer-container")

    Component =  Component

    components = []

}

const core = new Core()

window.Core = core

export {
    core
}