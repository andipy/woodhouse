import React from "react";
import { useNavigate } from "react-router-dom";
import { signOutCurrentUser } from "../../utilities/firebase/sign-out/sign-out.js";

import Container from "../../components/template/container/container.jsx";
import Topbar from "../../components/navigation/topbar/topbar.jsx";
import ListItem from "../../components/list-item.jsx/list-item.jsx";
import { allPlaces } from "../../data/mock-data.js";

const List = () => {

    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOutCurrentUser();
            navigate("/log-in");
        } catch(error) {
            console.log(error.message, "error on sign out")
        }
    }

    return (
        <>
            <Topbar place={allPlaces[0]} />
            <Container containerStyleExtention={"pt-[60px]"}>
                <ListItem key={"12345678"} />
                <button onClick={handleSignOut}>Log out</button>
            </Container>
        </>
    )
}

export default List;