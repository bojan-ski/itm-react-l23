'use client'
import { useContext, createContext, useState, useEffect } from "react";
// firebase funcs
import { auth } from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth"

const GoogleAuthContext = createContext({})

const GoogleAuthProvider = ({ children }) => {
    const [userProfileDetails, setUserProfileDetails] = useState({
        userLoggedIn: false,
        userID: '',
        userName: '',
    })

    const fetchUserDetails = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserProfileDetails({
                    userLoggedIn: true,
                    userID: user.uid,
                    userName: user.displayName,
                });
            } else {
                setUserProfileDetails({
                    userLoggedIn: false,
                    userID: '',
                    userName: '',
                });
            }
        });
    };

    useEffect(() => {
        fetchUserDetails()
    }, [])

    return <GoogleAuthContext.Provider value={{
        userProfileDetails, // Navbar
        setUserProfileDetails, // LogOutBtnGoogle
    }}>
        {children}
    </GoogleAuthContext.Provider>
}

const useGoogleAuthContext = () => {
    const context = useContext(GoogleAuthContext)

    if (context == undefined) throw new Error('context was used outside provider')

    return context
}

export {
    GoogleAuthProvider,
    useGoogleAuthContext
}