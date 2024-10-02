const getUserCredentials = () => {
    const savedCredentials = localStorage.getItem("userCredentials");

    if (savedCredentials) {
        return JSON.parse(savedCredentials);
    }

    return null;
}

export default getUserCredentials;
