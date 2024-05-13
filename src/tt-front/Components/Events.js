import { Component } from "./Component.js"
import { Select } from "./ui/select.js"
import { Button } from "./ui/button.js"

const eventsContainerStyles = {
    padding: "30px",
    width: "100%",
    background: "#fff"

}

const eventsTitleStyles = {
    "font-size": "36px",
    "margin-top": "20px",
    border: "none"
}

const eventsSearchPanelStyles = {
    "margin-top": "20px",
    width: "98%",
    height: "40px",
    padding: "15px",
    "box-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
}

const eventsSettingsBlockStyles = {
    "margin-top": "30px",
    display: "flex",
    "justify-content": "space-between",
    "align-items": "flex-end"
}

const eventCardStyles = {
    padding: "15px",
    width: "30%",
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "center",
}

const eventsFilterBlockStyles = {

}

const eventsFilterTitleStyle = {
    "font-size": "16px",
    color: "#86837F"
}

const eventsFilterInputStyles = {
    "margin-top": "15px",
    width: "270px",
    height: "35px",
    color: "#86837F"
}

const countBlockStyles = {
    "display": "flex",
}

const countTitleStyles = {
    "font-size": "24px",
    "margin-right": "25px"
}

const countNumStyles = {
    "font-size": "24px",
}

const eventBlockStyles = {
    width: "100%",
    padding: "15px",
    display: "flex",
    "justify-content": "center",
    "flex-wrap": "wrap",
    "margin-top": "50px"
}

const eventCardDescriptionStyles = {
    "display": "flex",
    width: "100%",
    "justify-content": "space-between",
    "margin-top": "25px",
    padding: "0 10px",
}

const eventCardTitleStyles = {
    "font-size": "24px",
    color: "#1E201F"
}

const eventDateStartStyles = {
    "font-size": "20px",
    color: "#C4C4C4"
}

const eventDescriptionStyles = {
    "margin-top": "15px",
    "font-size": "18px",
    color: "#86837F",
    padding: "0 10px"
}

const buttonStyles = {
    width: "225px",
    height: "35px",
    color: "#fff",
    "font-size": "20px",
    background: "#FA434B",
    border: "none",
    "margin-top": "50px",
    "margin-bottom": "15px",
    cursor: "pointer",
    transition: "transform .15s"
}

const eventContentBlockStyles = {
    "width": "100%",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "background-color": "#FCFCFC",
    "box-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
}

const filterSelectOptions = [
    { title: "Актуальности", value: 0 },
    { title: "Популярности", value: 1 },
    { title: "Совпадениям", value: 2 }
]

class Events {
    constructor(container, core) {
        this.container = container
        this.core = core
        this.events = core.api.getEvents()
        this.createEventsBlock()
    }

    async createEventsBlock() {

        const events = await this.events

        const eventsContainer = new Component(
            "div",
            this.container,
            this.core,
            {
                classList: ["events-container"],
                styles: eventsContainerStyles
            }
        )

        const eventsTitle = new Component(
            "h2",
            eventsContainer.component,
            this.core,
            {
                classList: ["events-title"],
                id: "events-title",
                styles: eventsTitleStyles,
                title: "Мероприятия"
            }
        )

        const eventsSearchPanel = new Component(
            "input",
            eventsContainer.component,
            this.core,
            {
                classList: ["event-search-panel"],
                styles: eventsSearchPanelStyles,
                id: "event-search-panel",
                type: "text",
                placeholder: "Найти мероприятие"
            },
        )

        const eventsSettingsBlock = new Component(
            "div",
            eventsContainer.component,
            this.core,
            {
                classList: ["events-settings-block"],
                styles: eventsSettingsBlockStyles,
            }
        )

        const eventsFilterBlock = new Component(
            "div",
            eventsSettingsBlock.component,
            this.core,
            {
                classList: ["events-filter-block"],
                styles: eventsFilterBlockStyles,
            }
        )

        const eventsFilterTitle = new Component(
            "h3",
            eventsFilterBlock.component,
            this.core,
            {
                classList: ["events-filter-title"],
                styles: eventsFilterTitleStyle,
                title: "Сортировать по:"
            }
        )

        const eventsFilterInput = new Select(
            eventsFilterBlock.component,
            this.core,
            filterSelectOptions,
            eventsFilterInputStyles
        )

        const countBlock = new Component(
            "div",
            eventsSettingsBlock.component,
            this.core,
            {
                classList: ["events-count-block"],
                styles: countBlockStyles
            }
        )

        const countTitle = new Component(
            "h3",
            countBlock.component,
            this.core,
            {
                classList: ["events-count-title"],
                styles: countTitleStyles,
                title: "Общее число мероприятий:"
            }
        )

        const countNum = new Component(
            "h3",
            countBlock.component,
            this.core,
            {
                classList: ["events-count-num"],
                styles: countNumStyles,
                title: events.events.length
            }
        )

        const eventsBlock = new Component(
            "div",
            eventsContainer.component,
            this.core,
            {
                classList: ["events-block"],
                styles: eventBlockStyles
            }
        )

        events.events.forEach(event => {

            const eventCard = new Component(
                "div",
                eventsBlock.component,
                this.core,
                {
                    classList: ["event-card"],
                    id: `event-card_${event.id}`,
                    styles: eventCardStyles
                }
            )

            const eventImageContainer = new Component(
                "div",
                eventCard.component,
                this.core,
                {
                    classList: ["event-img"],
                    styles: {
                        width: "100%"
                    }
                }
            )

            const eventImage = new Component(
                "img",
                eventImageContainer.component,
                this.core,
                {
                    classList: ["event-img"],
                    styles: {
                        width: "100%",
                        height: "100%"
                    },
                    src: "../public/assets/images/tele2img.png"
                }
            )

            const eventContentBlock = new Component(
                "div",
                eventCard.component,
                this.core,
                {
                    classList: ["event-content-block"],
                    styles: eventContentBlockStyles
                }
            )

            const eventCardDescription = new Component(
                "div",
                eventContentBlock.component,
                this.core,
                {
                    classList: ["event-card-description"],
                    styles: eventCardDescriptionStyles
                }
            )

            const eventCardTitle = new Component(
                "h4",
                eventCardDescription.component,
                this.container,
                {
                    classList: ["event-card-title"],
                    styles: eventCardTitleStyles,
                    title: event.name
                }
            )

            const eventDateStart = new Component(
                "p",
                eventCardDescription.component,
                this.core,
                {
                    classList: ["event-date-start"],
                    styles: eventDateStartStyles,
                    title: event.event_start
                }
            )

            const eventDescription = new Component(
                "p",
                eventContentBlock.component,
                this.core,
                {
                    classList: ["event-description"],
                    styles: eventDescriptionStyles,
                    title: "В «Точке кипения» Ивановского государственного университета 8 мая стартовал первый IT-проект в рамках научно-образовательного кампуса «Большая Ивановская мануфактура»",

                }
            )

            const button = new Button(
                eventContentBlock.component,
                this.core,
                buttonStyles,
                (e) => {
                    const data = {
                        event_id: event.id
                    }

                    this.core.api.addUserToEvent(data)
                },
                "Стать участником"
            )

        })

    }
}

export {
    Events
}