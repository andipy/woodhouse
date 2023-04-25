import React from "react";

const Input = ({ label, ...inputProps }) => {
    return (
        <div className="flex flex-col">
            <label>{label}</label>
            <input
                className="w-full border border-solid border-gray-400 py-2 px-3 rounded-md" 
                {...inputProps}
            />
        </div>
    )
}

export default Input;