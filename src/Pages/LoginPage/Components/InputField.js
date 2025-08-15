const InputField = ({label, type, placeholder, onChange}) => {
    return(
        <div className="input-group"> 
            <label>{label}</label>
            <input type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default InputField;
