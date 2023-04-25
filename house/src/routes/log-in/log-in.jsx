import React from "react";
import { useNavigate } from "react-router-dom";

import LogInForm from "../../components/log-in-form/log-in-form.jsx";
import Container from "../../components/template/container/container.jsx";

const LogIn = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <h1>Access your account</h1>
            <p>Log in with email and password</p>
            <LogInForm />
            <button onClick={() => navigate("/sign-up")}>Go to sign up</button>
        </Container>
    )
}

export default LogIn;