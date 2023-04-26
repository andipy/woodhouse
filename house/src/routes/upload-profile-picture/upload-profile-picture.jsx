import React from "react";

import Container from "../../components/template/container/container";
import UploadProfilePictureForm from "../../components/upload-profile-picture-form/upload-profile-picture-form";

const UploadProfilePicture = () => {
    return (
        <Container>
            <h1>Upload a profile picture to continue, famme vede la tua faccia</h1>
            <UploadProfilePictureForm />            
        </Container>
    )
}

export default UploadProfilePicture;