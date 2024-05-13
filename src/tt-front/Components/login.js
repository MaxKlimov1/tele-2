import { Component } from "./Component.js"
import { Button } from "./ui/button.js"
import { setTokenInLocalStorage } from "../services/getAndSetToken.js"
import { Header } from "./ui/Header.js"
import { Events } from "./Events.js"
import { TitleSection } from "./ui/titleSection.js"

const inputContainer = {
    width: "100%",
    height: "80px",
    "margin-top": "20px",
}

const inputStyles = {
    width: "100%",
    height: "40px",
    "box-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "0 10px"
}

const loginButton = {
    padding: "0 15px",
    height: "40px",
    border: "none",
    "border-radius": "0",
    background: "#FA434B",
    color: "#fff",
    "margin-top": "50px"
}

class Login {
    constructor(container, core, flag) {
        this.container = container,
        this.core = core

        if(flag === 1) {
            this.createLoginForm()
        }
        if(flag === 2) {
            this.createRegistrationForm()
        }
    }











    createLoginForm() {

        const form = new Component(
            "div",
            this.container,
            this.core,
            {
                classList: [ "loginForm" ],
                id: "loginForm",
                styles: {
                    "width": "600px",
                    "height": "620px",
                    "background": "#fff",
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    "padding": "15px 65px",
                    margin: "100px auto 100px",
                    "box-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    background: "#FCFCFC"
                }
            }
        )

        const formTitle = new Component(
            "p",
            form.component,
            this.core,
            {
                classList: ["form-title"],
                styles: {
                    "font-size": "36px",
                    "font-weight": "500",
                    "margin-top": "40px",
                    "margin-bottom": "30px"
                },
                title: "Войти"
            }
        )

        const emailContainer = new Component(
            "div",
            form.component,
            this.core,
            {
                classList: ["email-container"],
                id: "email-container",
                styles: inputContainer
            }
        )
        const passwordContainer = new Component(
            "div",
            form.component,
            this.core,
            {
                classList: ["password-container"],
                id: "password-container",
                styles: inputContainer
            }
        )





        const emailP = new Component(
            "p",
            emailContainer.component,
            this.core,
            {
                classList: ["input-name"],
                id: "email-p",
                title: "Email",
                styles: {

                }
            }
        )

        const emailInput = new Component(
            "input",
            emailContainer.component,
            this.core,
            {
                classList: ["input", "email-input"],
                id: "email-input",
                styles: inputStyles
            }
        )





        const passwordP = new Component(
            "p",
            passwordContainer.component,
            this.core,
            {
                classList: ["input-name"],
                id: "password-p",
                title: "Пароль",
            }
        )

        const passwordInput = new Component(
            "input",
            passwordContainer.component,
            this.core,
            {
                classList: ["input", "password-input"],
                id: "password-input",
                styles: inputStyles
            }
        )

        const button = new Button(form.component, this.core, loginButton, async(e) => {
            const data = {
                email: emailInput.component.value,
                password: passwordInput.component.value
            }
            const respons = await this.core.api.login(data)
            console.log(respons);

            if(respons.errorStatus) return

            setTokenInLocalStorage(respons.token)

            this.core.header.innerHTML = ""
            this.core.main.innerHTML = ""

            new Header("div", this.core.header, this.core)
            new TitleSection(this.core.main, this.core)
            this.core.api.getUser(localStorage.getItem("token"))
        }, "Авторизироваться")

        const forgonPassText = new Component(
            "p",
            form.component,
            this.core,
            {
                classList: ["forgot-pass-container"],
                styles: {
                    cursor: "pointer",
                    "margin-top": "8px",
                    color: "#86837F",
                    "font-size": "14px"
                },
                title: "Забыли пароль?"
            }
        )

        const regContainer = new Component(
            "div",
            form.component,
            this.core,
            {
                classList: ["reg-container"],
                styles: {
                    display: "flex",
                    "margin-top": "auto"
                }
            }
        )

        const regTitle = new Component(
            "div",
            regContainer.component,
            this.core,
            {
                classList: ["reg-title"],
                styles: {
                    color: "#86837F",
                    "font-size": "14px"
                },
                title: "У вас нет учетной записи?"
            }
        )

        const regButton = new Component(
            "div",
            regContainer.component,
            this.core,
            {
                classList: ["reg-Button"],
                styles: {
                    "margin-left": "5px",
                    cursor: "pointer",
                    color: "#86837F",
                    "font-size": "14px"
                },
                title: "Зарегестрироваться"
            }
        )

        regButton.component.addEventListener("click", (e) => {
            const main = this.core.main
            main.innerHTML = ""

            new Login(this.core.main, this.core, 2)
        })
    }

















    createRegistrationForm() {

        const form = new Component(
            "div",
            this.container,
            this.core,
            {
                classList: [ "loginForm" ],
                id: "loginForm",
                styles: {
                    "width": "600px",
                    "height": "780px",
                    "background": "#fff",
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    "padding": "15px 65px",
                    margin: "75px auto 75px",
                    "box-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    background: "#FCFCFC"
                }
            }
        )

        const formTitle = new Component(
            "p",
            form.component,
            this.core,
            {
                classList: ["form-title"],
                styles: {
                    "font-size": "36px",
                    "font-weight": "500",
                    "margin-top": "40px",
                    "margin-bottom": "30px"
                },
                title: "Регистрация"
            }
        )

        const nameContainer = new Component(
            "div",
            form.component,
            this.core,
            {
                classList: ["name-container"],
                id: "name-container",
                styles: inputContainer
            }
        )

        const surnameContainer = new Component(
            "div",
            form.component,
            this.core,
            {
                classList: ["surname-container"],
                id: "surname-container",
                styles: inputContainer
            }
        )

        const lastnameContainer = new Component(
            "div",
            form.component,
            this.core,
            {
                classList: ["lastname-container"],
                id: "lastname-container",
                styles: inputContainer
            }
        )

        const emailContainer = new Component(
            "div",
            form.component,
            this.core,
            {
                classList: ["email-container"],
                id: "email-container",
                styles: inputContainer
            }
        )
        const passwordContainer = new Component(
            "div",
            form.component,
            this.core,
            {
                classList: ["password-container"],
                id: "password-container",
                styles: inputContainer
            }
        )




        const nameP = new Component(
            "p",
            nameContainer.component,
            this.core,
            {
                classList: ["input-name"],
                id: "name-p",
                title: "Имя"
            }
        )

        const nameInput = new Component(
            "input",
            nameContainer.component,
            this.core,
            {
                classList: ["input", "email-input"],
                id: "name-input",
                styles: inputStyles
            }
        )





        const surnameP = new Component(
            "p",
            surnameContainer.component,
            this.core,
            {
                classList: ["input-surname"],
                id: "surname-p",
                title: "Фамилия"
            }
        )

        const surnameInput = new Component(
            "input",
            surnameContainer.component,
            this.core,
            {
                classList: ["input", "surname-input"],
                id: "surname-input",
                styles: inputStyles
            }
        )





        const lastnameP = new Component(
            "p",
            lastnameContainer.component,
            this.core,
            {
                classList: ["input-lastname"],
                id: "lastname-p",
                title: "Отчество"
            }
        )

        const lastnameInput = new Component(
            "input",
            lastnameContainer.component,
            this.core,
            {
                classList: ["input", "lastname-input"],
                id: "lastname-input",
                styles: inputStyles
            }
        )





        const emailP = new Component(
            "p",
            emailContainer.component,
            this.core,
            {
                classList: ["input-name"],
                id: "email-p",
                title: "Email"
            }
        )

        const emailInput = new Component(
            "input",
            emailContainer.component,
            this.core,
            {
                classList: ["input", "email-input"],
                id: "email-input",
                styles: inputStyles
            }
        )





        const passwordP = new Component(
            "p",
            passwordContainer.component,
            this.core,
            {
                classList: ["input-name"],
                id: "password-p",
                title: "Пароль",
            }
        )

        const passwordInput = new Component(
            "input",
            passwordContainer.component,
            this.core,
            {
                classList: ["input", "password-input"],
                id: "password-input",
                styles: inputStyles
            }
        )

        const button = new Button(form.component, this.core, loginButton, async(e) => {
            const data = {
                name: nameInput.component.value,
                surname: surnameInput.component.value,
                lastname: lastnameInput.component.value,
                email: emailInput.component.value,
                password: passwordInput.component.value
            }
            const respons = await this.core.api.registration(data)
            console.log(respons);

            if(respons.errorStatus) return

            setTokenInLocalStorage(respons.token)

            this.core.header.innerHTML = ""
            this.core.main.innerHTML = ""

            new Header("div", this.core.header, this.core)
            new TitleSection(this.core.main, this.core)
            this.core.api.getUser(localStorage.getItem("token"))
        }, "Зарегестрироваться")


    }
}

export {
    Login
}