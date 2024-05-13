import { getTokenFromLocalStorage } from "../services/getAndSetToken.js"
import { Component } from "./Component.js"
import { Button } from "./ui/button.js"

const userProfileContainerStyles = {
    width: "100%",
    padding: "10px 50px",
    background: "#fff",
    position: "relative",
    height: "1260px"
}

const profileBannerStyles = {
    width: "100%",
    height: "300px"
}

const bannerStyles = {
    width: "100%",
    height: "300px"
}

const userInfoContainerStyles = {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    width: "350px",
    // padding: "15px",
    "box-shadow": "0px 4px 4px 0 rgba(0, 0, 0, 0.25)",
    background: "#FCFCFC",

}

const userLogoContainerStyles = {
    height: "430px",
    width: "100%",
    // "margin-bottom": "10px",
    "box-shadow": "0px 4px 4px 0 rgba(0, 0, 0, 0.25)",
}

const userLogoStyles = {
    width: "100%",
    height: "100%"
}

const addLogoContainerStyles = {
    padding: "15px"
}

const addWrapperStyles = {
    display: "flex",
    "align-items": "center",
    width: "160px",
    height: "45px",
    border: "1px solid #282828",
    padding: "0 8px",
    "margin-top": "15px",
    margin: "auto",
    cursor: "pointer"
}

const addLogoPlusStyles = {
    "margin-right": "5px"
}

const addLogoTextStyles = {
    "font-size": "16px"
}

const userEducationContainerStyles = {
    "margin-top": "30px"
}

const userEducationTitleStyles = {
    "font-size": "20px",
    color: "#86837F"
}

const userEducationDescrStyles = {
    "font-size": "20px",
    color: "#000",
    "margin-top": "5px",
    "line-height": "25px",
    // "text-align": "center"
}

const professionalStatusContainerStyles = {
    "margin-top": "20px"
}

const professionalStatusTitleStyles = {
    "font-size": "20px",
    color: "#86837F",
}

const professionalStatusDescrStyles = {
    "font-size": "20px",
    color: "#000",
    "margin-top": "5px"
}

const userDescrBlockStyles = {
    background: "#fff",
    // width: "370px",
    position: "absolute",
    top: "130px",
    left: "95px"
}

const userEventsContainerStyles = {
    display: "flex",
    "flex-direction": "column",
    width: "350px",
    padding: "15px",
    "box-shadow": "0px 4px 4px 0 rgba(0, 0, 0, 0.25)",
    "margin-top": "35px"
}

const userEventsTitleStyles = {
    "font-size": "20px",
    color: "#000",

    "margin-bottom": "20px"
}

const eventsListStyles = {
    "max-height": "220px",
    "overflow-y": "scroll"
}

const eventsTextStyles = {
    "font-size": "20px",
    color: "#86837F",
    "text-align": "center"
}

const addEventStyles = {
    height: "35px",
    padding: "0 30px",
    "border-radius": "0",
    border: "none",
    background: "#FA434B",
    color: "#fff",
    "font-size": "20px",
    margin: "30px 0 0 25px"
}

const eventsContainerStyles = {
    width: "100%",
}

const userEventStyles = {
    width: "100%",
    "box-shadow": "0px 4px 4px 0 rgba(0, 0, 0, 0.25)",
    margin: "15px 0 0",
    padding: "15px"
}

const eventTitleStyles = {
    "font-size": "20px",
    color: "#000",
    "margin-bottom": "10px"
}

const eventTimeStartStyles = {

}

const userActivePanelStyles = {
    "margin-left": "430px",
    // width: "750px",
    // "box-shadow": "0px 4px 4px 0 rgba(0, 0, 0, 0.25)",
    padding: "0px",
}

const userNameStyles = {
    "margin-top": "10px",
    width: "100%",
    display: "flex",
    "justify-content": "flex-start",
    "font-size": "32px"
}

const userNameTextStyles = {

}

const activeButtonsBlockStyles = {
    "margin-top": "15px"
}

const addFritndButtonStyles = {
    padding: "10px 20px",
    border: "none",
    "border-radius": "0",
    background: "#FA434B",
    color: "#fff",
    "box-shadow": "0px 4px 4px 0 rgba(0, 0, 0, 0.25)",
    cursor: "pointer"
}

const addAwardsButtonStyles = {
    padding: "10px 20px",
    border: "none",
    "border-radius": "0",
    background: "#FA434B",
    color: "#fff",
    "box-shadow": "0px 4px 4px 0 rgba(0, 0, 0, 0.25)",
    "margin-left": "30px",
    cursor: "pointer"
}

const userActivityStyles = {
    padding: "20px",
    "box-shadow": "0px 4px 4px 0 rgba(0, 0, 0, 0.25)",
    "margin-top": "30px",
    background: "#FCFCFC"
}

const userActivityTitleStyles = {
    "font-size": "20px",
    color: "#000"
}

const userActivityButtonsStyles = {
    "margin-top": "20px"
}

const buttonInProgressStyles = {
    padding: "7px",
    "font-size": "16px",
    background: "none",
    border: "1px solid #FA434B",
    color: "#FA434B",
    cursor: "pointer"

}

const buttonAfterStyles = {
    padding: "7px",
    "font-size": "16px",
    background: "none",
    border: "1px solid #86837F",
    color: "#86837F",
    "margin-left": "20px",
    cursor: "pointer"
}

const activityListStyles = {

}

class UserProfile {
    constructor(container, core) {
        this.container = container
        this.core = core
        this.createUserProfile()
    }

    createUserProfile = async () => {

        const userEvent = await this.core.api.getEventsByUser()
        const user = await this.core.api.getUser(getTokenFromLocalStorage())

        const userProfileContainer = new Component(
            "div",
            this.container,
            this.core, {
            classList: ["user-profile-container"],
            styles: userProfileContainerStyles
        }
        )

        const profileBanner = new Component(
            "div",
            userProfileContainer.component,
            this.core, {
            classList: ["user-profile-banner-container"],
            styles: profileBannerStyles
        }
        )

        const banner = new Component(
            "img",
            profileBanner.component,
            this.core, {
            classList: ["profile-banner"],
            styles: bannerStyles,
            src: "../public/assets/images/banner2.png"
        }
        )






        const userDescrBlock = new Component(
            "div",
            userProfileContainer.component,
            this.core,
            {
                classList: ["user-descr-block"],
                styles: userDescrBlockStyles
            }
        )






        const userInfoContainer = new Component(
            "div",
            userDescrBlock.component,
            this.core, {
            classList: ["user-info-container"],
            styles: userInfoContainerStyles
        }
        )

        const userLogoContainer = new Component(
            "div",
            userInfoContainer.component,
            this.core, {
            classList: ["user-logo-container"],
            styles: userLogoContainerStyles
        }
        )

        const userLogo = new Component(
            "img",
            userLogoContainer.component,
            this.core, {
            classList: ["profile-user-logo"],
            styles: userLogoStyles,
            src: "../public/assets/images/userp.png"
        }
        )

        const addLogoContainer = new Component(
            "div",
            userInfoContainer.component,
            this.core,
            {
                classList: ["user-add-logo-button"],
                styles: addLogoContainerStyles
            }
        )

        const addWrapper = new Component(
            "div",
            addLogoContainer.component,
            this.core,
            {
                classList: ["add-wrapper"],
                styles: addWrapperStyles
            }
        )

        const addLogoPlus = new Component(
            "img",
            addWrapper.component,
            this.core,
            {
                classList: ["add-logo-plus"],
                styles: addLogoPlusStyles,
                src: "../public/assets/images/camera.png"
            }
        )

        const addLogoText = new Component(
            "p",
            addWrapper.component,
            this.core,
            {
                classList: ["add-logo-text"],
                styles: addLogoTextStyles,
                title: "Добавить фото"
            }
        )

        const userEducationContainer = new Component(
            "div",
            addLogoContainer.component,
            this.core,
            {
                classList: ["user-education-container"],
                styles: userEducationContainerStyles
            }
        )

        const userEducationTitle = new Component(
            "p",
            userEducationContainer.component,
            this.core,
            {
                classList: ["user-education-text"],
                styles: userEducationTitleStyles,
                title: "Образование:"
            }
        )

        const userEducationDescr = new Component(
            "p",
            userEducationContainer.component,
            this.core,
            {
                classList: ["user-education-descr"],
                styles: userEducationDescrStyles,
                title: `ФГБОУ ВО «Ивановский государственный университет»
                Физика функциональных материалов и наноматериалов
                Очное (дневное) обучение, Бюджет, Магистратура`
            }
        )

        const professionalStatusContainer = new Component(
            "div",
            addLogoContainer.component,
            this.core,
            {
                classList: ["professional-status-container"],
                styles: professionalStatusContainerStyles
            }
        )

        const professionalStatusTitle = new Component(
            "p",
            professionalStatusContainer.component,
            this.core,
            {
                classList: ["professional-status-title"],
                styles: professionalStatusTitleStyles,
                title: "Профессиональный статус:"
            }
        )

        const professionalStatusDescr = new Component(
            "p",
            professionalStatusContainer.component,
            this.core,
            {
                classList: ["professional-status-descr"],
                styles: professionalStatusDescrStyles,
                title: `Студент`
            }
        )

        const userEventsContainer = new Component(
            "div",
            userDescrBlock.component,
            this.core,
            {
                classList: ["user-events-container"],
                styles: userEventsContainerStyles
            }
        )

        const userEventsTitle = new Component(
            "p",
            userEventsContainer.component,
            this.core,
            {
                classList: ["user-events-titile"],
                styles: userEventsTitleStyles,
                title: "Забранированные аудитории"
            }
        )

        const eventsList = new Component(
            "div",
            userEventsContainer.component,
            this.core,
            {
                classList: ["user-events-list"],
                styles: eventsListStyles
            }
        )

        if (userEvent.events.length < 1) {
            const eventsText = new Component(
                "div",
                eventsList.component,
                this.core,
                {
                    classList: ["user-event-text"],
                    styles: eventsTextStyles,
                    title: "Вы не являетесь организатором ни одного мероприятия"
                }
            )

            const addEvent = new Button(
                eventsList.component,
                this.core,
                addEventStyles,
                (e) => {

                },
                "Создать мероприятие"
            )
        }

        if (userEvent.events.length > 0) {

            const eventsContainer = new Component(
                "div",
                eventsList.component,
                this.core,
                {
                    classList: ["user-events-items-container"],
                    styles: eventsContainerStyles
                }
            )

            userEvent.events.forEach(event => {

                const eventOne = new Component(
                    "div",
                    eventsContainer.component,
                    this.core,
                    {
                        classList: ["user-event"],
                        styles: userEventStyles,
                        id: `user-event_${event.id}`
                    }
                )










                const eventTitle = new Component(
                    "p",
                    eventOne.component,
                    this.core,
                    {
                        classList: ["user-event-title"],
                        styles: eventTitleStyles,
                        title: event.name
                    }
                )


                const eventTimeStart = new Component(
                    "p",
                    eventOne.component,
                    this.core,
                    {
                        classList: ["user-event-time-start"],
                        styles: eventTimeStartStyles,
                        title: new Date(event.timestamp_start).toLocaleString()
                    }
                )

                const eventTimeEnd = new Component(
                    "p",
                    eventOne.component,
                    this.core,
                    {
                        classList: ["user-event-time-end"],
                        styles: eventTimeStartStyles,
                        title: new Date(event.timestamp_end).toLocaleString()
                    }
                )
            })






            // new Component(
            //     "p",
            //     ,
            //     this.core,
            //     {
            //         classList: [""],
            //         styles: {}
            //     }
            // )

            


        }

        const userActivePanel = new Component(
            "p",
            userProfileContainer.component,
            this.core,
            {
                classList: ["user-active-panel"],
                styles: userActivePanelStyles
            }
        )

        const userName = new Component(
            "div",
            userActivePanel.component,
            this.core,
            {
                classList: ["profile-user-name"],
                styles: userNameStyles
            }
        )
        console.log(user);
        const userNameText = new Component(
            "div",
            userName.component,
            this.core,
            {
                classList: ["user-name-text"],
                styles: userNameTextStyles,
                title: `${user.user[0].surname} ${user.user[0].name} ${user.user[0].lastname}`
            }
        )

        const activeButtonsBlock = new Component(
            "div",
            userActivePanel.component,
            this.core,
            {
                classList: ["active-button-block"],
                styles: activeButtonsBlockStyles
            }
        )

        const addFritndButton = new Button(
            activeButtonsBlock.component,
            this.core,
            addFritndButtonStyles,
            (e) => {

            },
            "Добавить в друзья"

        )

        const addAwards = new Button(
            activeButtonsBlock.component,
            this.core,
            addAwardsButtonStyles,
            (e) => {

            },
            "Достижения"

        )
        
        const userActivity = new Component(
            "div",
            userActivePanel.component,
            this.core,
            {
                classList: ["user-activity-panel"],
                styles: userActivityStyles
            }
        )

        const userActivityTitle = new Component(
            "p",
            userActivity.component,
            this.core,
            {
                classList: ["user-activity-title"],
                styles: userActivityTitleStyles,
                title: "Активность пользователя"
            }
        )

        const userActivityButtons = new Component(
            "div",
            userActivity.component,
            this.core,
            {
                classList: ["user-activity-buttons"],
                styles: userActivityButtonsStyles,
            }
        )

        const buttonInProgress = new Button(
            userActivityButtons.component,
            this.core,
            buttonInProgressStyles,
            (e) => {

            },
            "В процессе"
        )

        const buttonAfter = new Button(
            userActivityButtons.component,
            this.core,
            buttonAfterStyles,
            (e) => {

            },
            "Прошедшие"
        )

        const activityList = new Component(
            "div",
            userActivity.component,
            this.core,
            {
                classList: ["activity-list"],
                styles: activityListStyles
            }
        )


    }
}

export {
    UserProfile
}