import React from "react";
import { useNavigate } from "react-router-dom";

import LogInForm from "../../components/log-in-form/log-in-form.jsx";
import Container from "../../components/template/container/container.jsx";

const LogIn = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <h1 className="text-2xl font-semibold">Access your account</h1>
            <p className="mb-4">Log in with email and password</p>
            <LogInForm />
            <button className="btn-secondary-enabled" onClick={() => navigate("/sign-up")}>Go to sign up</button>
            <button className="btn-secondary-enabled" onClick={() => navigate("/your-email-to-recover-password")}>Recover password</button>
        </Container>
    )
}

export default LogIn;