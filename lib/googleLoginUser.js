const googleLoginUser = async (username, email, password) => {
    try {
        const apiCall = await fetch('http://localhost:3000/api/auth/google_registration', {
            method: "POST",
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        })
        const response = await apiCall.json()

        return response;
    } catch (error) {
        console.log(error);

        return null;
    }
}

export default googleLoginUser