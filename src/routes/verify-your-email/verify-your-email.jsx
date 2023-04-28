import React from "react";

import Container from "../../components/template/container/container";

const VerifyYourEmail = () => {
    return (
        <Container>
            <h1 className="text-2xl font-semibold">Aoh! Volevi fare il furbo?</h1>
            <p className="mb-4">
                Verify your email to demonstrate you are a real account, we have already sent you a verification email to the email address you have used to sign up!
            </p>
            <div className="mt-10">
                <p className="text-sm font-semibold">In case you have already verified your account, but you haven't been redirected into the app, click here:</p>
                <button className="btn-secondary-enabled" onClick={()=> window.location.reload(true)}>Enter app</button>
            </div>            
        </Container>
    )
}

export default VerifyYourEmail;