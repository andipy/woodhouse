import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword }  from "../../utilities/firebase/authentication/authentication.js";
import Input from "../input/input";

const logInFormFields = {
    email: "",
    password: ""
}

const LogInForm = () => {

    const navigate = useNavigate();

    const inputsArray = [
        {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter your email",
            required: true
        },{
            label: "password",
            name: "password",
            type: "password",
            placeholder: "Enter your password",
            required: true
        }
    ]

    const [logInFields, setLogInFields] = useState({});
    const handleInputChange = (e) => {
        setLogInFields({...logInFields, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if ( logInFields.email && logInFields.password ) {
            try {
                const response = await logInWithEmailAndPassword(logInFields.email, logInFields.password);
                console.log(response, "loggato")
                setLogInFields(logInFormFields);
                navigate("/places");
            } catch (error) {
                console.log(error.message)
            }
        }
    }

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleFormSubmit}
        >
            {inputsArray.map((elem, index) => {
                return (
                    <Input
                        key={index}
                        label={elem.label}
                        placeholder={elem.placeholder}
                        type={elem.type}
                        name={elem.name}
                        required={elem.required}
                        value={logInFields[elem.name]}
                        onChange={handleInputChange}
                    />
                )
            })}
            <button>Access</button>
        </form>
    )
}

export default LogInForm;