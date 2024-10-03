'use client'
import { useContext, createContext, useState, useEffect } from "react";
// firebase funcs
import { auth } from "./firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth"


const GoogleAuthContext = createContext({})

const GoogleAuthProvider = ({ children }) => {
    // const [userProfileDetails, setUserProfileDetails] = useState({
    //     userLoggedIn: false,
    //     userID: '',
    //     userName: '',
    // })

    // const [userProfileDetails, setUserProfileDetails] = useState(null)
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         console.log(user);
    //         console.log(auth);
            
    //         setUserProfileDetails(user)
    //         setLoading(false)
    //     })
    //     return () => unsubscribe()
    // }, [])



    // const fetchUserDetails = async () => {
    //     onAuthStateChanged(auth, (user) => {
    //         console.log(auth);
    //         console.log(user);
    //         if (user) {
    //             setUserProfileDetails({
    //                 userLoggedIn: true,
    //                 userID: user.uid,
    //                 userName: user.displayName,
    //             });
    //         } else {
    //             setUserProfileDetails({
    //                 userLoggedIn: false,
    //                 userID: '',
    //                 userName: '',
    //             });
    //         }
    //     });
    // };

    // useEffect(() => {
    //     fetchUserDetails()
    // }, [])


    // useEffect(() => {      
    //     console.log('useEffect - context');

    //     onAuthStateChanged(auth, (user) => {
    //         console.log(auth);            
    //         console.log(user);
    //         if (user) {
    //             setUserProfileDetails({
    //                 userID: user.uid,
    //                 userName: user.displayName,
    //             })
    //         }
    //     })
    // }, [])

    const [userProfileDetails, setUserProfileDetails] = useState(null)

    useEffect(() => {
        return auth.onAuthStateChanged(initState)
    },[])

    const initState = async (user) => {
        if (user) {
            setUserProfileDetails(user)
        }
    }



    // const logOutUser = async () => {
    //     if (window.confirm('Da li ste sigurni da želite da se odjavite')) {
    //         try {
    //             await signOut(auth)

    //             setUserProfileDetails({
    //                 userID: '',
    //                 userName: '',
    //             })

    //             console.log('you have successfully logged out');
    //         } catch (error) {
    //             //error message
    //             console.error(error);
    //         }
    //     }
    // }

    return <GoogleAuthContext.Provider value={{
        userProfileDetails,
        // logOutUser,
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