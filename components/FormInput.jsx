const FormInput = ({ name, title, type }) => {
    return (
        <div>
            <label htmlFor={name}>
                {title}:
            </label>
            <input type={type} name={name} required />
        </div>
    )
}

export default FormInput