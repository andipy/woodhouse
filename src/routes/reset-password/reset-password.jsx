import React from "react";

import ResetPasswordForm from "../../components/reset-password-form/reset-password-form";
import Container from "../../components/template/container/container.jsx";

const ResetPassword = () => {
    return (
        <Container>
            <h1 className="text-2xl font-semibold">Recover your password</h1>
            <p className="mb-4">You will receive an email to reset your password</p>
            <ResetPasswordForm />
        </Container>        
    )
}

export default ResetPassword;