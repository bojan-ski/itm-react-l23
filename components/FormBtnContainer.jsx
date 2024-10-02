import { resetForm } from "@/utils/resetForm"

const FormBtnContainer = ({btnOne, btnTwo}) => {    
    return (
        <div className="btn-container">
            <button type="submit" className="submit-btn">
                {btnOne}
            </button>
            <button type="button" className="cancel-btn" onClick={() => resetForm()}>
                {btnTwo}
            </button>
        </div>
    )
}

export default FormBtnContainer