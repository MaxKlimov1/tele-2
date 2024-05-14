import { elemDiv } from "./container.js";
import { Input } from "./ui/input.js";
import { Component } from "./Component.js";

class Chat {
    constructor(container, core) {
        this.container = container
        this.core = core
        this.createChat()
    }

    messages = []

    async createChat() {
        const ws = new WebSocket("ws://127.0.0.1:8080")

        const chatWrapper = elemDiv(
            this.container,
            ["chat-container"]
        )

        const chatLeftSideBar = elemDiv(
            chatWrapper,
            ["chat-left-side-bar"]
        )

        const chatRightSideBar = elemDiv(
            chatWrapper,
            ["chat-right-side-bar"]
        )


        const userList = elemDiv(
            chatLeftSideBar,
            ["user-list"]
        )

        const userSearchPanel = elemDiv(
            userList,
            ["user-search-panel"],
        )

        const searchPanel = Input(
            userSearchPanel,
            "input-user-search",
            "text",
            'Поиск'
        )

        const usersBlock = elemDiv(
            userList,
            ["users-block"],
        )

        const usersList = [
            { id: 1, name: "Мария Петрова", src: "../public/assets/images/user2.png" },
            { id: 2, name: "Егор Иванов", src: "../public/assets/images/user3.png" },
            { id: 3, name: "Дмитрий Петров", src: "../public/assets/images/user4.png" },
            { id: 4, name: "Хакатон", src: "../public/assets/images/user8.png" },
            { id: 5, name: "Иван Петров", src: "../public/assets/images/user5.png" },
            { id: 6, name: "Иван Петров", src: "../public/assets/images/user6.png" },
            { id: 7, name: "Иван Петров", src: "../public/assets/images/user7.png" },
            { id: 8, name: "Иван Петров", src: "../public/assets/images/user1.png" },
        ]

        usersList.forEach(user => {
            const userWrapper = elemDiv(
                usersBlock,
                ["user-container"],
            )

            const userLogo = elemDiv(
                userWrapper,
                ["user-messanger-logo"],
            )

            const userLogoImg = new Component(
                "img",
                userLogo,
                this.core,
                {
                    classList: ["message-user-logo"],
                    styles: {},
                    src: user.src
                }
            )

            const userName = elemDiv(
                userWrapper,
                ["user-messanger-name"],
            )

            userName.innerHTML = user.name
        })






















        const messangerHeader = elemDiv(
            chatRightSideBar,
            ["user-messanger-header"],
        )

        const closeMessage = elemDiv(
            messangerHeader,
            ["close-message"],
        )

        const headerUser = elemDiv(
            messangerHeader,
            ["messanger-user-block"],
        )

        const userLogo = elemDiv(
            headerUser,
            ["chat-right-bar-logo"],
        )

        const userLogoImage = new Component(
            "img",
            userLogo,
            this.core,
            {
                classList: ["partner-logo"],
                styles: {
                    
                },
                src: "../public/assets/images/user8.png"
            }
        )

        const chatUserInfo = elemDiv(
            headerUser,
            ["chat-user-info"],
        )

        const userName = elemDiv(
            chatUserInfo,
            ["chat-right-bar-name"],
        )

        userName.innerHTML = 'Сообщество "Хакатон"'

        const usersCount = elemDiv(
            chatUserInfo,
            ["chat-users-count"],
        )

        usersCount.innerHTML = "2 участника"


        const messagesBlock = elemDiv(
            chatRightSideBar,
            ["messages-block"],
        )

        const sendPanel = elemDiv(
            chatRightSideBar,
            ["send-panel"],
        )

        const addFilesContainer = elemDiv(
            sendPanel,
            ["add-files-container"],
        )

        //блок с изображением плюса добавить (контейнер = addFilesContainer)-->
        const plusImage = new Component(
            "img",
            addFilesContainer,
            this.core,
            {
                classList: ["plus-images"],
                styles: {},
                src: "../public/assets/images/plus.png"
            }
        )

        const inputMessage = Input(
            sendPanel,
            "input-message"
        )

        const sendButtonBlock = elemDiv(
            sendPanel,
            ["send-button-block"],
        )

        const sendButtonImg = new Component(
            "img",
            sendButtonBlock,
            this.core,
            {
                classList: ["send-button-img"],
                styles: {
                    width: "100%"
                },
                src: "../public/assets/images/sendArrow.png"
            }
        )












        // const inputName = Input(
        //     chatWrapper,
        //     "input-name"
        // )

        // const inputMessage = Input(
        //     chatWrapper,
        //     "input-message"
        // )

        // const button = document.createElement("button")
        // button.innerHTML = "Send"

        // chatWrapper.append(button)

        const userData = await this.core.api.getUser(localStorage.getItem("token"))
        console.log(userData);
        ws.onmessage = (message) => {
            const data = JSON.parse(message.data)

            if(data.email !== userData.user[0].email) data.isUser = false
            if(data.email === userData.user[0].email) data.isUser = true
            this.messages.push(data)
            console.log(data);

            if(!data.isUser) {
                console.log("ne data");

                const div = elemDiv(
                    messagesBlock,
                    ["user-message-container"]
                )

                new Component(
                    "p",
                    div,
                    this.core,
                    {
                        classList: ["user-name"],
                        styles:{},
                        title: `${data.surname} ${data.name}`
                    }
                )

                new Component(
                    "p",
                    div,
                    this.core,
                    {
                        classList: ["user-messages"],
                        styles:{},
                        title: data.message
                    }
                )
            }
            if(data.isUser) {
                console.log("data");

                const div = elemDiv(
                    messagesBlock,
                    ["friend-message-container"]
                )

                new Component(
                    "p",
                    div,
                    this.core,
                    {
                        classList: ["friend-name"],
                        styles:{},
                        title: `${data.surname} ${data.name}`
                    }
                )

                new Component(
                    "p",
                    div,
                    this.core,
                    {
                        classList: ["friend-messages"],
                        styles:{},
                        title: data.message
                    }
                )
            }
        }

        const send = (event) => {
            const token = localStorage.getItem("token")
            const message = inputMessage.element.value
            ws.send(JSON.stringify({
                message,
                token
            }))
        }

        sendButtonBlock.addEventListener("click", (e) => {
            send()
            inputMessage.element.value = ""
        })

    }
}

export {
    Chat
}