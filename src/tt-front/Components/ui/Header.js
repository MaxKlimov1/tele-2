import { createElement } from "../CreateElement.js"
import { Component } from "../Component.js"
import { getTokenFromLocalStorage } from "../../services/getAndSetToken.js"
import { Login } from "../login.js"
import { UserProfile } from "../userProfile.js"
import { TitleSection } from "./titleSection.js"
import { Events } from "../Events.js"

const navMenuStyles = {
    display: "flex",
    "justify-content": "spase-between"
}

const navInfoStyles = {
    "margin-right": "50px",
    "font-size": "18px",
    "color": "#282828",
    "cursor": "pointer"
}

const headerStyles = {
    width: "100%",
    height: "60px",
    background: "red",
    padding: "0px 30px",
    display: "flex",
    "align-items": "center",
    "justify-content": "space-between",
    background: "#fff"
}


class Header {
    constructor(elemType, container, core) {
        this.elemType = elemType
        this.container = container
        this.core = core
        this.createHeader()
    }

    async createHeader() {
        const header = new Component(
            this.elemType,
            this.container,
            this.core,
            {
                classList: [
                    "header"
                ],
                styles: headerStyles,
                id: "header"
            })

        this.core.components.push(header)

        const navMenu = new Component(
            "div",
            header.component,
            this.core,
            {
                classList: ["nav-menu"],
                styles: navMenuStyles

            }
        )

        const navP1 = new Component(
            "div",
            navMenu.component,
            this.core,
            {
                classList: ["navigate-info"],
                title: "Главная",
                styles: navInfoStyles
            }
        )

        this.addHandler(navP1.component, (e) => {
            const main = this.core.main
            main.innerHTML = ""

            new TitleSection(this.core.main, this.core)
        })

        const navP2 = new Component(
            "div",
            navMenu.component,
            this.core,
            {
                classList: ["navigate-info"],
                title: "Мероприятия",
                styles: navInfoStyles
            }
        )


        this.addHandler(navP2.component, (e) => {
            const main = this.core.main
            main.innerHTML = ""

            new Events(this.core.main, this.core)
        })


        const navP3 = new Component(
            "div",
            navMenu.component,
            this.core,
            {
                classList: ["navigate-info"],
                title: "Деловое сообщество",
                styles: navInfoStyles
            }
        )

        const navP4 = new Component(
            "div",
            navMenu.component,
            this.core,
            {
                classList: ["navigate-info"],
                title: "Деятельность",
                styles: navInfoStyles
            }
        )

        const containerForUserLogo = new Component(
            "div",
            header.component,
            this.core,
            {
                classList: ["user-logo-container"],
                styles: {
                    "height": "30px",
                    display: "flex",
                    "align-items": "center",
                    cursor: "pointer"
                }
            }
        )

        const userLogo = new Component(
            "img",
            containerForUserLogo.component,
            this.core,
            {
                classList: ["user-logo"],
                styles: {
                    width: "30px",
                    "margin-right": "5px"
                }
            }
        )

        const user = await this.core.api.getUser(getTokenFromLocalStorage())
        console.log(user);

        if(!user.errorStatus) {
            userLogo.component.src = "../../public/assets/images/userlogo.png"

            const userName = new Component(
                "p",
                containerForUserLogo.component,
                this.core,
                {
                    classList: ["user-name-block"],
                    styles: {
                        "font-size": "18px"
                    },
                    title: user.user[0].name
                }
            )

            const login = containerForUserLogo.component.addEventListener("click", (e) => {
                const main = this.core.main
                main.innerHTML = ""

                new UserProfile(this.core.main, this.core)

            })
        }
        else {
            userLogo.component.src = "../../public/assets/images/login.png"

            const login = containerForUserLogo.component.addEventListener("click", (e) => {
                const main = this.core.main
                main.innerHTML = ""

                new Login(this.core.main, this.core, 1)

            })
        }


        
    }

    addHandler = (container, func) => {
        container.addEventListener("click", func)
    }
}

export {
    Header
}