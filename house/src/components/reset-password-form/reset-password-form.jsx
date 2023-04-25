import React, { useState } from "react";
import Input from "../input/input";
import { sendEmailToResetPassword } from "../../utilities/firebase/reset-password/reset-password.js";
import { useNavigate } from "react-router-dom";

const recoverPasswordFields = {
    email: "",
    confirmEmail: ""
}

const ResetPasswordForm = () => {

    const navigate = useNavigate();

    const emailArray = [
        {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter the email of your account",
            required: true
        },{
            label: "Repeat your email",
            name: "confirmEmail",
            type: "email",
            placeholder: "Repeat the email of your account",
            required: true
        },
    ]

    const [emails, setEmails] = useState(recoverPasswordFields);
    const handleInputChange = (e) => {
        setEmails({...emails, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if ( emails.email === emails.confirmEmail ) {
            try {
                await sendEmailToResetPassword(emails.email);
                setEmails(recoverPasswordFields);
                navigate("/log-in");
            } catch (error) {
                console.log(error.message, "error message on recover password email inviation")
            }
        }
    }

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleFormSubmit}
        >
            {emailArray.map((elem, index) => {
                return (
                    <Input
                        key={index}
                        label={elem.label}
                        placeholder={elem.placeholder}
                        type={elem.type}
                        name={elem.name}
                        required={elem.required}
                        value={emails[elem.name]}
                        onChange={handleInputChange}
                    />
                )
            })}
            <button>Send email to reset password</button>
        </form>
    )
}

export default ResetPasswordForm;