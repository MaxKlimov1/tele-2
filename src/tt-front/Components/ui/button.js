

class Button {
    constructor(
        container,
        core,
        styles,
        event,
        title
    ) {
        this.container = container
        this.core = core
        this.styles = styles
        this.event = event
        this.title = title
        this.createButton()
    }

    createButton() {
        
        const button = document.createElement("button")

        for( let key in this.styles ) {
            button.style[key] = this.styles[key]
        }

        button.addEventListener("click", this.event)

        button.innerHTML = this.title

        this.container.append(button)

    }
}

export {
    Button
}