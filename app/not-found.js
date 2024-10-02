import Link from "next/link"

const NotFound = () => {
    return (
        <div className="not-found-page">
            <h1>Page does not exist</h1>
            <Link href='/' className="btn-back">
                Back to Home page
            </Link>
        </div>
    )
}

export default NotFound