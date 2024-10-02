const saveUserCredentials = (username, password, userToken) => {
    const userCredentials = { username, password, userToken }
    localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
}

export default saveUserCredentials