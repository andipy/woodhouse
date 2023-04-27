import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOutCurrentUser } from "../../utilities/firebase/sign-out/sign-out.js";
import { doc, query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../utilities/firebase/firebase.js";

import Container from "../../components/template/container/container.jsx";
import Topbar from "../../components/navigation/topbar/topbar.jsx";
import ListItem from "../../components/list-item.jsx/list-item.jsx";

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

    const [places, setPlaces] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'places'), orderBy("createdAt", "desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let placesArray = [];
            querySnapshot.forEach((doc) => {
                let placeObj = {
                    ...doc.data(),
                    placeID: doc.id,
                };
                placesArray.push(placeObj)
            });
            setPlaces(placesArray);
        });
    }, [])
    
    

    return (
        <>
            <Topbar place={places} />
            <Container containerStyleExtention={"pt-[60px]"}>
                {places.map(place => {
                    return (
                        <ListItem
                            key={place.placeID}
                            place={place}
                        />
                    )
                })}
                <button className="btn-secondary-enabled" onClick={handleSignOut}>Log out</button>
            </Container>
        </>
    )
}

export default List;