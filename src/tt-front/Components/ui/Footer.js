import { Component } from "../Component.js"
import { Button } from "./button.js"

const footerStyles = {
    display: "flex",
    padding: "30px",
    background: "#000000"
}

const leftBarStyles = {

}

const socialBlockStyles = {

}

const socialTitleStyles = {
    color: "#fff",
    "font-size": "20px",
    "text-transform": "uppercase",
}

const socialDescrStyles = {
    color: "rgba(255,255,255,0.75)",
    width: "400px",
    "font-size": "16px",
    "margin-top": "10px"
}

const contactsContainerStyles = {

}

const contactsTitleStyles = {
    "font-size": "20px",
    "text-transform": "uppercase",
    color: "#fff",
    "margin-top": "190px"
}

const contactsListStyles = {
    "margin-top": "10px"
}

const vkStyles = {
    cursor: "pointer"
}

const tgStyles = {
    cursor: "pointer"
}

const rightBarStyles = {
    "margin-left": "600px"
}

const rightBarTitleStyles = {
    "font-size": "20px",
    "text-transform": "uppercase",
    color: "#fff"
}

class Footer {
    constructor(container, core) {
        this.container = container
        this.core = core
        this.createFooter()
    }

    createFooter = () => {
        const footerContainer = new Component(
            "div",
            this.container,
            this.core,
            {
                classList: ["footer"],
                styles: footerStyles
            }
        )

        const leftBar = new Component(
            "div",
            footerContainer.component,
            this.core,
            {
                classList: ["left-bar"],
                styles: leftBarStyles
            }
        )

        const socialBlock = new Component(
            "div",
            leftBar.component,
            this.core,
            {
                classList: ["social-block"],
                styles: socialBlockStyles
            }
        )

        const socialTitle = new Component(
            "p",
            socialBlock.component,
            this.core,
            {
                classList: ["social-title"],
                styles: socialTitleStyles,
                title: "Кратко о нас"
            }
        )

        const socialDescr = new Component(
            "p",
            socialBlock.component,
            this.core,
            {
                classList: ["social-descr"],
                styles: socialDescrStyles,
                title: `Принципиально нового качества городская среда для образования, работы, созидания и жизни.`
            }
        )






        const contactsContainer = new Component(
            "div",
            leftBar.component,
            this.core,
            {
                classList: ["contacts-container"],
                styles: contactsContainerStyles
            }
        )

        const contactsTitle = new Component(
            "p",
            contactsContainer.component,
            this.core,
            {
                classList: ["contacts-title"],
                styles: contactsTitleStyles,
                title: "Контакты"
            }
        )

        const contactsList = new Component(
            "div",
            contactsContainer.component,
            this.core,
            {
                classList: ["contacts-list"],
                styles: contactsListStyles
            }
        )

        const vk = new Component(
            "img",
            contactsList.component,
            this.core,
            {
                classList: ["vk"],
                styles: vkStyles,
                src: "../../public/assets/images/vk.png"
            }
        )

        const tg = new Component(
            "img",
            contactsList.component,
            this.core,
            {
                classList: ["tg"],
                styles: tgStyles,
                src: "../../public/assets/images/tg.png"
            }
        )










        const rightBar = new Component(
            "div",
            footerContainer.component,
            this.core,
            {
                classList: ["right-bar"],
                styles: rightBarStyles
            }
        )

        const rightBarTitle = new Component(
            "p",
            rightBar.component,
            this.container,
            {
                classList: ["right-bar-title"],
                styles: rightBarTitleStyles,
                title: "Напишите нам"
            }
        )

        
        const nameInputContainer = new Component(
            "div",
            rightBar.component,
            this.core,
            {
                classList: ["input-name-container"],
                styles: {
                    "margin-top": "15px"
                }
            }
        )

        const nameInputTitle = new Component(
            "p",
            nameInputContainer.component,
            this.core,
            {
                classList: ["input-name-title"],
                styles: {
                    "font-size": "16px",
                    color: "#fff"
                },
                title: "Имя"
            }
        )

        const nameInput = new Component(
            "input",
            nameInputContainer.component,
            this.core,
            {
                classList: ["input-name"],
                styles: {
                    background: "#000",
                    border: "0.5px solid white",
                    "border-radius": "0",
                    width: "350px",
                    // height: "40px",
                    "margin-top": "5px",
                    color: "#fff",
                    padding: "10px"
                },
                type: "text"
            }
        )



        const emailInputContainer = new Component(
            "div",
            rightBar.component,
            this.core,
            {
                classList: ["input-email-container"],
                styles: {
                    "margin-top": "10px"
                }
            }
        )

        const emailInputTitle = new Component(
            "p",
            emailInputContainer.component,
            this.core,
            {
                classList: ["input-email-title"],
                styles: {
                    "font-size": "16px",
                    color: "#fff"
                },
                title: "Email"
            }
        )

        const emailInput = new Component(
            "input",
            emailInputContainer.component,
            this.core,
            {
                classList: ["input-email"],
                styles: {
                    background: "#000",
                    border: "0.5px solid white",
                    "border-radius": "0",
                    width: "350px",
                    // height: "40px",
                    "margin-top": "5px",
                    color: "#fff",
                    padding: "10px"
                },
                type: "text"
            }
        )








        const textInputContainer = new Component(
            "div",
            rightBar.component,
            this.core,
            {
                classList: ["input-text-container"],
                styles: {
                    "margin-top": "10px"
                }
            }
        )

        const textInputTitle = new Component(
            "p",
            textInputContainer.component,
            this.core,
            {
                classList: ["input-text-title"],
                styles: {
                    "font-size": "16px",
                    color: "#fff"
                },
                title: "Сообщение"
            }
        )

        const textInput = new Component(
            "textarea",
            textInputContainer.component,
            this.core,
            {
                classList: ["input-text"],
                styles: {
                    background: "#000",
                    border: "0.5px solid white",
                    "border-radius": "0",
                    width: "370px",
                    // height: "40px",
                    "margin-top": "5px",
                    color: "#fff",
                    padding: "15px"
                }
            }
        )

        const button = new Button(
            rightBar.component,
            this.core,
            {
                "border": "none",
                "border-radius": "0",
                padding: "10px 20px",
                background: "#FA434B",
                color: "#fff",
                "margin-top": "20px",
                cursor: "pointer"
            },
            (e) => {

            },
            "Отправить"
        )

    }
}

export {
    Footer
}