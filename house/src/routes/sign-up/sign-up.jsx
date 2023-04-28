import React from "react";
import { useNavigate } from "react-router-dom";

import SignUpForm from "../../components/sign-up-form/sign-up-form.jsx";
import Container from "../../components/template/container/container.jsx";

const SignUp = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <h1 className="text-2xl font-semibold">Create your account</h1>
            <p className="mb-4">Sign up with email and password</p>
            <SignUpForm />
            <button className="btn-secondary-enabled" onClick={() => navigate("/log-in")}>Go to login</button>
        </Container>
    )
}

export default SignUp;