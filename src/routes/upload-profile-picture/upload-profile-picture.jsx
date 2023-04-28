import React from "react";

import Container from "../../components/template/container/container";
import UploadProfilePictureForm from "../../components/upload-profile-picture-form/upload-profile-picture-form";

const UploadProfilePicture = () => {
    return (
        <Container>
            <h1 className="text-2xl font-semibold">Upload a profile picture to continue</h1>
            <p className="mb-4">We need to know who you are, plus this step will complete your profile!</p>
            <UploadProfilePictureForm />            
        </Container>
    )
}

export default UploadProfilePicture;