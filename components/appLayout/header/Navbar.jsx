'use client'
import Link from "next/link"
// utils
import getUserCredentials from "@/utils/getUserCredentials"
// context
import { useGoogleAuthContext } from "@/app/context"
// components
import LogOutBtnCustom from "./LogOutBtnCustom"
import LogOutBtnGoogle from "./LogOutBtnGoogle"


const Navbar = () => {
    const checkIfUserIsLoggedIn = getUserCredentials()
    const { userProfileDetails } = useGoogleAuthContext()

    return (
        <nav className="navbar">
            <Link href='/' className="nav-link">
                Home
            </Link>

            {checkIfUserIsLoggedIn || (userProfileDetails && userProfileDetails.userLoggedIn) ? (
                <>
                    <Link href='/products/register' className="nav-link">
                        Register Product
                    </Link>

                    {checkIfUserIsLoggedIn ? (
                        <LogOutBtnCustom />
                    ) : (
                        <LogOutBtnGoogle />
                    )}
                </>
            ) : (
                <>
                    <Link href='/google_registration' className="nav-link">
                        Google Create Account
                    </Link>
                    <Link href='/google_login' className="nav-link">
                        Google Login
                    </Link>
                    <Link href='/login' className="nav-link">
                        Custom Login
                    </Link>
                </>
            )}
        </nav>
    )
}

export default Navbar