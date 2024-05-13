import { createElement } from "./CreateElement.js"

class Component {

    constructor(elemType, container, core, elemParameters) {

        this.elemType = elemType
        this.container = container
        this.core = core
        this.elemParameters = elemParameters
        this.addElement()

    }

    component

    addElement() {

        const params = {
            styles: this.elemParameters.styles,
            id: this.elemParameters?.id ? this.elemParameters.id : "",
            title: this.elemParameters?.title ? this.elemParameters.title : ""
        }

        if(this.elemParameters?.type) params.type = this.elemParameters.type

        if(this.elemParameters?.src) params.src = this.elemParameters.src

        if(this.elemParameters?.placeholder) params.placeholder = this.elemParameters.placeholder

        const element = createElement({
            elemType: this.elemType,
            parent: this.container,
            classList: this.elemParameters.classList,
            params
        })

        this.component = element

    }

}

export {
    Component
}