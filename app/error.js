'use client'
import Link from "next/link"

const Error = ({ error, reset }) => {
    // console.log(error);
    return (
        <div className="error-page">
            <h1>Oppss!!!</h1>
            <h2>There was an error</h2>
            <Link href='/' className="btn-back">
                Back to Home page
            </Link>
            <button onClick={reset} className="reset-btn">
                Reset
            </button>
        </div>
    )
}

export default Error