'use client'
import Link from "next/link"
// utils
import getUserCredentials from "@/utils/getUserCredentials"
import refresh from "@/utils/refresh"

const Navbar = () => {
    const checkIfUserIsLoggedIn = getUserCredentials()

    return (
        <nav className="navbar">
            <Link href='/' className="nav-link">
                Home
            </Link>

            <Link href='/products/register' className="nav-link">
                Register Product
            </Link>

            {checkIfUserIsLoggedIn ? (
                <button className="log-out-btn" onClick={() => {
                    localStorage.clear()
                    refresh()
                }}>
                    Log Out
                </button>
            ) : (
                <Link href='/login' className="nav-link">
                    Login
                </Link>
            )}
        </nav>
    )
}

export default Navbar