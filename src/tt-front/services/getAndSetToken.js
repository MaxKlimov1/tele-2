

const setTokenInLocalStorage = (token) => {
    localStorage.setItem("token", token)
}

const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem("token")
    return token
}

export {
    setTokenInLocalStorage,
    getTokenFromLocalStorage
}