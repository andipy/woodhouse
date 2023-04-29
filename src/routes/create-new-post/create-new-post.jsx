import React from "react";

import Topbar from "../../components/navigation/topbar/topbar";
import Container from "../../components/template/container/container";
import CreateNewPostForm from "../../components/create-new-post-form/create-new-post-form";

const CreateNewPost = () => {

    return (
        <>
        <Topbar />
        <Container containerStyleExtention={"pb-4 bg-white pt-[60px]"}>
            <h1 className="text-2xl font-semibold">Create new post</h1>
            <CreateNewPostForm />
        </Container>
        </>
    )
}

export default CreateNewPost;