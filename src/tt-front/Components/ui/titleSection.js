import { Component } from "../Component.js"

const TitleSectionStyles = {
    "background-image": "url('../../public/assets/images/titleSectionBG.png')",
    "background-size": "100% 100%",
    "width": "100%",
    "height": "522px",
    display: "flex",
    "align-items": "flex-end",
    padding: "40px",
    "box-shadow": "inset 100px -80px 1000px 100px rgba(0, 0, 0, 0.7)",
    "background-repeat": "repeat-x",
}

class TitleSection {

    constructor(container, core) {
        this.container = container
        this.core = core
        this.createTitleSection()
    }

    async createTitleSection() {

        const titleComponent = new Component(
            "section",
            this.container,
            this.core,
            {
                classList: ["title-section"],
                styles: TitleSectionStyles,
                id: "title-section"
            }
        )

        this.core.components.push(titleComponent)


        const textContainer = new Component(
            "div",
            titleComponent.component,
            this.core,
            {
                classList: ["title-section-text-container"],
                styles: {

                }
            }
        )



        const titleSectionText = new Component(
            "h2",
            textContainer.component,
            this.core,
            {
                classList: ["title-section-text"],
                title: "Научно-образовательное пространство",
                styles: {
                    color: "#fff"
                }
            }
        )

        const titleSectionMainText = new Component(
            "h2",
            textContainer.component,
            this.core,
            {
                classList: ["title-section-text"],
                title: "БОЛЬШАЯ ИВАНОВСКАЯ МАНУФАКТУРА",
                styles: {
                    color: "#fff",
                    "font-size": "48px",
                    "margin-top": "10px"
                }
            }
        )

        const bimInfoContainer = new Component(
            "div",
            this.container,
            this.core,
            {
                classList: ["bim-info-container"],
                styles: {
                    display: "flex",
                    padding: "30px 50px",
                    "justify-content": "space-evenly",
                    background: "#FBFBFB",
                }
            }
        )













        const info = {
            "Дата основания": "2002 год",
            "Площадь будущего межвузовского кампуса": "44 тысячи м2",
            "Межвузовский образовательный центр": "5 тысяч м2"
        }

        for(let key in info) {

            const createDate = new Component(
                "div",
                bimInfoContainer.component,
                this.core,
                {
                    classList: ["bim-create-date"],
                    styles: {
                        display: "flex",
                        "flex-direction": "column"
                    }
                }
            )

            const infoTitle = new Component(
                "p",
                createDate.component,
                this.core,
                {
                    classList: ["info-title"],
                    styles: {
                        color: "#818181",
                        "font-size": "18px",
                        "text-align": "center"
                    },
                    title: key
                }
            )

            const infoDescr = new Component(
                "p",
                createDate.component,
                this.core,
                {
                    classList: ["info-descr"],
                    styles: {
                        color: "#282828",
                        "font-size": "28px",
                        "font-weight": "bold",
                        "text-align": "center",
                        "margin-top": "5px"
                    },
                    title: info[key]
                }
            )
        }









        const eventsBlock = new Component(
            "div",
            this.container,
            this.core,
            {
                classList: ["events-block"],
                styles: {
                    display: "flex",
                    overflow: "hidden",
                    background: "#fff",
                    padding: "50px"
                },
            }
        )

        const events = await this.core.api.getEvents()

        events.events.forEach(event => {
            console.log(event);

            const eventBlock = new Component(
                "div",
                eventsBlock.component,
                this.core,
                {
                    classList: ["event-block"],
                    styles: {
                        width: "365px",
                        height: "450px",
                        "background-image": "url(../../public/assets/images/event.png)",
                        "margin": "0 0px"
                    }
                }
            )

        })














        const redTitleBlock = new Component(
            "div",
            this.container,
            this.core,
            {
                classList: ["red-title-block"],
                styles: {
                    padding: "40px 20px",
                    background: "#FA434B",
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "center"

                }
            }
        )

        const redTitleContainer = new Component(
            "div",
            redTitleBlock.component,
            this.core,
            {
                classList: ["red-title-container"],
                styles: {
                    // height: "65px",
                    border: "2px solid #fff",
                    "border-radius": "22px",
                    padding: "10px 40px",
                    "text-align": "center",
                    "font-size": "18px",
                    color: "#fff"
                }
            }
        )

        const redTitle = new Component(
            "div",
            redTitleContainer.component,
            this.core,
            {
                classList: ["red-title"],
                styles: {},
                title: `Создание международного научно-образовательного центра — это новый уровень научных исследований и повышение качества высшего образования, сильная экономика с современными технологиями и новый уровень рабочих мест и доходов жителей.`
            }
        )
















        const newsBlock = new Component(
            "div",
            this.container,
            this.core,
            {
                classList: ["news-block"],
                styles: {
                    padding: "50px",
                }
            }
        )

        const newsTitle = new Component(
            "p",
            newsBlock.component,
            this.core,
            {
                classList: ["news-title"],
                styles: {
                    color: "#000",
                    "font-size": "36px",
                    "font-weight": "bold"
                },
                title: "Новости"
            }
        )

        const newsContainer = new Component(
            "div",
            newsBlock.component,
            this.core,
            {
                classList: ["news-block"],
                styles: {
                    display: "flex",
                    "justify-content": "space-evenly",
                    margin: "30px 0 0 0"
                }
            }
        )

        for(let i = 0; i <= 2; i++) {
            const newImageContainer = new Component(
                "div",
                newsContainer.component,
                this.core,
                {
                    classList: ["new-image-container"],
                    styles: {
                        width: "450px"
                    }
                }
            )

            const image = new Component(
                "img",
                newImageContainer.component,
                this.core,
                {
                    classList: ["new-image"],
                    styles: {
                        width: "100%",
                    },
                    src: i === 0 ? "../../public/assets/images/new2.png" : "../../public/assets/images/new1.png"
                }
            )

            const descrContainer = new Component(
                "div",
                newImageContainer.component,
                this.core,
                {
                    classList: ["descr-container"],
                    styles: {
                        display: "flex"
                    }
                }
            )

            const newTitle = new Component(
                "p",
                descrContainer.component,
                this.core,
                {
                    classList: ["new-title"],
                    styles: {
                        "font-size": "20px",
                        "line-height": "30px",
                        width: "85%"
                    },
                    title: i === 0 ? `Кампус «БИМ» станет драйвером работы по развитию экосистемы технологического предпринимательства в регионе`
                    : "12 апреля в рамках Единого дня карьеры «Работай в Иванове» прошел «Лекторий БИМ»"
                }
            )

            const date = new Component(
                "p",
                descrContainer.component,
                this.core,
                {
                    classList: ["new-date"],
                    styles: {
                        "margin": "5px 0 0 auto",
                        "font-size": "20px",
                        color: "#C4C4C4"
                    },
                    title: i === 0
                    ? "12.04.24"
                    : "12.05.21"
                }
            )
        }

    }
    

}

export {
    TitleSection
}