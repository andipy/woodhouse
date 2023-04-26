import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpWithEmailAndPassword } from "../../utilities/firebase/authentication/authentication.js";
import { serverTimestamp } from "firebase/firestore";
import { createUserDocumentOnSignUp } from "../../utilities/firebase/create-user-doc-on-signup/create-user-doc-on-signup.js";
import { sendEmailToVerifyAccount } from "../../utilities/firebase/email-verification/email-verification.js";
import { auth } from "../../utilities/firebase/firebase.js";

import Input from "../input/input.jsx";

const signUpFormFields = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {

    const navigate = useNavigate();

    const inputsArray = [
        {
            label: "First name",
            name: "firstName",
            type: "text",
            placeholder: "Enter your first name",
            required: true
        },{
            label: "Last name",
            name: "lastName",
            type: "text",
            placeholder: "Enter your last name",
            required: true
        },{
            label: "displayName",
            name: "displayName",
            type: "text",
            placeholder: "Create your username",
            required: true
        },{
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter your email",
            required: true
        },{
            label: "Create a password",
            name: "password",
            type: "password",
            placeholder: "Create your password",
            required: true
        },{
            label: "Confirm the password",
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm your password",
            required: true
        }
    ]

    const [signUpFields, setSignUpFields] = useState(signUpFormFields);
    const handleInputChange = (e) => {
        setSignUpFields({...signUpFields, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if ( signUpFields.email && signUpFields.password ) {
            if ( signUpFields.password === signUpFields.confirmPassword ) {
                try {
                    const { user } = await signUpWithEmailAndPassword(signUpFields.email, signUpFields.password);

                    if (user) {
                        await createUserDocumentOnSignUp(user, {
                            createdAt: serverTimestamp(),
                            displayName: signUpFields.displayName,
                            email: user.email,
                            firstName: signUpFields.firstName,
                            lastName: signUpFields.lastName,
                            photoURL: user.photoURL,
                            role: "OWNER",
                            updatedAt: serverTimestamp()
                        });
                        await sendEmailToVerifyAccount(auth.currentUser)
                        setSignUpFields(signUpFormFields);
                        navigate("/log-in");
                    }
                } catch(error) {
                    console.log(error.message, "messaggio errore")
                }
                
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
                        value={signUpFields[elem.name]}
                        onChange={handleInputChange}
                    />
                )
            })}
            <button>Create account</button>
        </form>
    )
}

export default SignUpForm;