import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import EditDescriptionForm from "../../components/edit-description-form/edit-description-form.jsx";
import Topbar from "../../components/navigation/topbar/topbar.jsx";
import Container from "../../components/template/container/container.jsx";

const EditDescription = ({ place }) => {

    const navigate = useNavigate();
    const params = useParams();

    return (
        <>
        <Topbar place={place} />
        <Container containerStyleExtention={"pt-[60px]"}>            
            <EditDescriptionForm placeID={params.placeID} />
        </Container>
        </>
        
    )
}

export default EditDescription;