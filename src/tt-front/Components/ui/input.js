

const Input = (container, id, type = "text", placeholder = "") => {

    const input = document.createElement("input")

    input.setAttribute("type", type)
    input.setAttribute("placeholder", placeholder)
    input.setAttribute("id", id)

    container.append(input)

    return {
        element: input
    }

}

export {
    Input
}