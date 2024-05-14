

const elemDiv = (wrapper, classList) => {

    const elem = document.createElement("div")

    classList.forEach((className) => {
        elem.classList.add(className)
    })

    wrapper.append(elem)

    return elem

}

export {
    elemDiv
}