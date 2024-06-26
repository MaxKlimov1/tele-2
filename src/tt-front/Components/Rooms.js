import { Component } from "./Component.js"
import { Button } from "./ui/button.js"
import { TitleSection } from "./ui/titleSection.js"
import { UserProfile } from "./userProfile.js"

const roomContainerStyles = {
    width: "100%",
    padding: "30px",
    "display": "flex",
    "flex-wrap": "wrap",
    "justify-content": "center"
}

const roomBlockStyles = {
    width: "450px",
    margin: "40px",
    // border: "1px solid black"
    "box-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    background: "#FCFCFC",
    padding: "20px",

}

const roomBlockTitleStyles = {
    "font-size": "20px",
    "font-weight": "400",
    "text-align": "center"
}

const roomStatusContainerStyles = {

}

const statusTitleStyles = {
    "font-size": "18",
    color: "#86837F",
    "margin-top": "15px"
}

const statusValueStyles = {
    "font-size": "18px",
    color: "#000",
    "margin-top": "15px"
}

const roomPopupStyles = {
    // border: "1px solid black",
    background: "#fff",
    padding: "80px",
    // display: "flex",
    "box-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
}

const buttonStyles = {
    padding: "5px 15px",
    height: "40px",
    border: "none",
    "border-radius": "0",
    cursor: "pointer",
    "margin": "15px auto 0",
    background: "#FA434B",
    color: "#fff",
    "font-size": "16px"
}

const dateContainerStyles = {
    // display: "flex",
    "margin-top": "15px",
    // "display": "flex",
}

const dateStartStyles = {

}

const dateEndStyles = {

}

class Rooms {
    constructor(container, core) {
        this.container = container
        this.core = core
        this.createRoomsComponent()
    }

    async createRoomsComponent() {

        const roomsBlock = new Component(
            "div",
            this.container,
            this.core,
            {
                classList: ["rooms-block"],
                styles: {
                    display: "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    padding: "60px 0 0"
                }
            }
        )



        const roomsTitle = new Component(
            "p",
            roomsBlock.component,
            this.core,
            {
                classList: ["rooms-title"],
                styles: {
                    "font-size": "32px",
                    "font-weight": "bold"
                },
                title: "Бронирование аудиторий"
            }
        )


        const roomsDescr = new Component(
            "p",
            roomsBlock.component,
            this.core,
            {
                classList: ["rooms-sescr"],
                styles: {
                    "margin-top": "20px",
                    "font-size": "20px",
                },
                title: "Забронируйте место для проведения вашего мероприятия"
            }
        )







        const roomsComponent = new Component(
            "div",
            roomsBlock.component,
            this.core,
            {
                classList: ["rooms-container"],
                id: "rooms-container",
                styles: roomContainerStyles
            }
        )

        function compareFn(a, b) {
            if (a.id < b.id) {
                return -1;
            } else if (a.id > b.id) {
                return 1;
            }
            return 0;
        }


        const rooms = await this.core.api.getRooms()

        const roomsSort = rooms.rooms.sort(compareFn)

        console.log(rooms);

        roomsSort.forEach((room, iter) => {

            const dateStart1 = new Date(room.timestamp_start).toLocaleString()
            const dateStart2 = new Date(room.timestamp_end).toLocaleString()

            const block = new Component(
                "div",
                roomsComponent.component,
                this.core,
                {
                    classList: ["room-block"],
                    id: `room_${iter}`,
                    styles: roomBlockStyles
                }
            )

            const roomTitle = new Component(
                "h3",
                block.component,
                this.core,
                {
                    classList: ["room-block-title"],
                    styles: roomBlockTitleStyles,
                    id: `room-title_${iter}`,
                    title: room.name
                }
            )

            const statusContainer = new Component(
                "div",
                block.component,
                this.core,
                {
                    classList: ["room-status-container"],
                    id: `room-status-container_${iter}`,
                    styles: roomStatusContainerStyles
                }
            )

            const statusName = new Component(
                "p",
                statusContainer.component,
                this.core,
                {
                    classList: ["status-title"],
                    styles: statusTitleStyles,
                    title: "Статус бронирования:"
                }
            )

            const statusValue = new Component(
                "p",
                statusContainer.component,
                this.core,
                {
                    classList: ["status-value"],
                    id: `status-value_${iter}`,
                    styles: statusValueStyles,
                    title: !room.is_busy ? "Свободно" : "Звбронировано"
                }
            )

            if (!room.is_busy) {
                const button = new Button(
                    statusContainer.component,
                    this.core,
                    buttonStyles,
                    (e) => {

                        const roomPopup = document.querySelector(".room-popup-container")

                        if (roomPopup !== null) roomPopup.remove()

                        this.createPopup(
                            this.container,
                            room,
                            iter
                        )
                    },
                    "Забронировать"
                )
            }
            else {
                const dateContainer = new Component(
                    "div",
                    statusContainer.component,
                    this.core,
                    {
                        classList: ["room-date-container"],
                        styles: dateContainerStyles
                    }
                )

                const dateStart = new Component(
                    "p",
                    dateContainer.component,
                    this.core,
                    {
                        classList: ["room-date-start"],
                        styles: dateStartStyles,
                        title: dateStart1
                    }
                )

                const dateEnd = new Component(
                    "p",
                    dateContainer.component,
                    this.core,
                    {
                        classList: ["room-date-end"],
                        styles: dateEndStyles,
                        title: dateStart2
                    }
                )
            }
        })
    }

    createPopup(container, data, iter) {

        console.log(iter);

        const roomPopupWrapper = new Component(
            "div",
            container,
            this.core,
            {
                classList: ["room-popup-wrapper"],
                styles: {
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0, 0, 0, 0.35)",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center"
                },
            }
        )

        const roomPopupContainer = new Component(
            "div",
            roomPopupWrapper.component,
            this.core,
            {
                classList: ["room-popup-container"],
                styles: roomPopupStyles
            }
        )

        const title = new Component(
            "p",
            roomPopupContainer.component,
            this.core,
            {
                classList: ["popup-title"],
                styles: {
                    "font-size": "26px",
                    "font-weight": "bold",
                    "text-align": "center",
                    "margin-bottom": "30px"
                },
                title: "Бронирование аудитории"
            }
        )

        const amountPeopleContainer = new Component(
            "div",
            roomPopupContainer.component,
            this.core,
            {
                classList: ["amount-people-container"],
                styles: {},
            }
        )

        const amountPeopleTitle = new Component(
            "p",
            amountPeopleContainer.component,
            this.core,
            {
                classList: ["amount-people-title"],
                styles: {
                    "margin-bottom": "5px",
                    "font-size": "18px"
                },
                title: "Количество участников"
            }
        )

        const amountPeopleInput = new Component(
            "input",
            amountPeopleContainer.component,
            this.core,
            {
                classList: ["input", "amount-people-input"],
                id: "amount-people-input",
                styles: {
                    "box-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    width: "460px",
                    height: "50px",
                    padding: "0 20px"
                }
            }
        )

        const timestampContainer = new Component(
            "div",
            roomPopupContainer.component,
            this.core,
            {
                classList: ["room-timestamp-container"],
                styles: {
                    
                },
            }
        )








        const timestampStartTitle = new Component(
            "p",
            amountPeopleContainer.component,
            this.core,
            {
                classList: ["timestamp-start-title"],
                styles: {
                    "margin-top": "20px"
                    ,
                    "margin-bottom": "5px",
                    "font-size": "18px"
                },
                title: "Дата Начала бронирования"
            }
        )

        const timestampStartInput = new Component(
            "input",
            amountPeopleContainer.component,
            this.core,
            {
                classList: ["input", "timestamp-start-input"],
                id: "timestamp-start-input",
                styles: {
                    "box-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    width: "460px",
                    height: "50px",
                    padding: "0 20px"
                },
                type: "datetime-local"
            }
        )














        const timestampEndTitle = new Component(
            "p",
            amountPeopleContainer.component,
            this.core,
            {
                classList: ["timestamp-end-title"],
                styles: {
                    "margin-top": "20px",
                    "margin-bottom": "5px",
                    "font-size": "18px"
                },
                title: "Дата окончания бронирования"
            }
        )

        const timestampEndInput = new Component(
            "input",
            amountPeopleContainer.component,
            this.core,
            {
                classList: ["input", "timestamp-end-input"],
                id: "timestamp-end-input",
                styles: {
                    "box-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    width: "460px",
                    height: "50px",
                    padding: "0 20px"
                },
                type: "datetime-local"
            }
        )


        const button = new Button(
            roomPopupContainer.component,
            this.core,
            {
                margin: "60px 0 0 160px",
                // "margin-top": "20px",
                width: "200px",
                height: "50px",
                "background": "#FA434B",
                border: "none",
                "border-radius": "0",
                color: "#fff",
                "font-size": "18px"
            },
            (e) => {

                const roomData = {
                    "isBusy": true,
                    "amount_people": amountPeopleInput.component.value,
                    "timestampStart": timestampStartInput.component.value,
                    "timestampEnd": timestampEndInput.component.value,
                    "roomId": data.id
                }

                console.log({
                    timestampStartInput: Number(new Date(timestampStartInput.component.value)),
                    timestampEndInput: Number(new Date(timestampEndInput.component.value))
                });

                this.core.api.updateRoom(roomData)

                roomPopupWrapper.component.remove()

                this.core.main.innerHTML = ""

                new UserProfile(this.core.header, this.core)

            },
            "Забронировать"
        )










    }
}

export {
    Rooms
}