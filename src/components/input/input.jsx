import React from "react";

const Input = ({ label, inputStyleExtention, ...inputProps }) => {
    return (
        <div className="flex flex-col">
            <label>{label}</label>
            <input
                className={`w-full border border-solid border-gray-400 py-2 px-3 rounded-md ${inputStyleExtention}`} 
                {...inputProps}
            />
        </div>
    )
}

export default Input;