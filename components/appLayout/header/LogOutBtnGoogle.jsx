import { useRouter } from "next/navigation"
// context
import { useGoogleAuthContext } from "@/app/context"
// firebase funcs
import { auth } from "@/app/firebase.config"
import { signOut } from "firebase/auth"

const LogOutBtnGoogle = () => {
    const router = useRouter()
    const { setUserProfileDetails } = useGoogleAuthContext()

    const logOutUser = async () => {
        if (window.confirm('Are you sure you want to log out')) {
            try {
                await signOut(auth)

                setUserProfileDetails({
                    userID: '',
                    userName: '',
                })

                //success message
                console.log('you have successfully logged out');

                // navigate user
                router.push('/')
            } catch (error) {
                //error message
                console.error(error);
            }
        }
    }

    return (
        <button className="log-out-btn" onClick={() => logOutUser()}>
            Log Out - Google
        </button>
    )
}

export default LogOutBtnGoogle