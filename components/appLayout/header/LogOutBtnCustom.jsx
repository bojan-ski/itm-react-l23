// utils
import refresh from "@/utils/refresh";

const LogOutBtnCustom = () => {
    return (
        <button className="log-out-btn" onClick={() => {
            localStorage.clear()

            //success message
            console.log('you have successfully logged out');

            // navigate user
            refresh()
        }}>
            Log Out - Custom
        </button>
    )
}

export default LogOutBtnCustom