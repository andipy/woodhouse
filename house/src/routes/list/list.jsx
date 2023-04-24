import React from "react";

import Container from "../../components/template/container/container.jsx";
import Topbar from "../../components/navigation/topbar/topbar.jsx";
import ListItem from "../../components/list-item.jsx/list-item.jsx";
import { allPlaces } from "../../data/mock-data.js";

const List = () => {
    return (
        <>
            <Topbar place={allPlaces[0]} />
            <Container containerStyleExtention={"pt-[60px]"}>
                <ListItem />
            </Container>
        </>
    )
}

export default List;