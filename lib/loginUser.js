export const loginUser = async (username, password) => {
    try {
        const apiCall = await fetch('http://localhost:3000/api/auth/login', {
            method: "POST",
            body: JSON.stringify({
                username: username,
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