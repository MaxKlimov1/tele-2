

const createElement = ({
    elemType,
    parent,
    classList = [],
    params
}) => {

    const element = document.createElement(elemType)
    
    if(classList.length > 0) {
        classList.forEach(className => {
            element.classList.add(className)
        })
    }

    if (params?.styles) {
        for( let key in params.styles ) {
            element.style[key] = params.styles[key]
        }
    }
    if (params?.title) element.innerHTML = params.title

    if (params?.id) element.setAttribute("id", params.id)

    if (params?.type) element.setAttribute("type", params.type)

    if (params?.src) element.setAttribute("src", params.src)

    if (params?.placeholder) element.setAttribute("placeholder", params.placeholder)

    parent.append(element)


    return element
}

export {
    createElement
}