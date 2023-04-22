import React from "react";

import Container from "../../template/container/container.jsx";
import Topbar from "../../navigation/topbar/topbar.jsx";
import ListItem from "../../list-item.jsx/list-item.jsx";
import { allPlaces } from "../../../data/mock-data.js";

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