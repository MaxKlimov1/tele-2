

class Select {
    constructor(container, core, options, styles) {
        this.container = container
        this.core = core
        this.options = options
        this.styles = styles
        this.createSelector()

    }

    createSelector() {
        const select = document.createElement("select")

        this.options.forEach(option => {

            const elem = document.createElement("option")

            elem.value = option.value
            elem.text = option.title
            
            select.append(elem)
        })

        for(let key in this.styles) {
            select.style[key] = this.styles[key]
        }

        this.container.append(select)
    }
}

export {
    Select
}