import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOutCurrentUser } from "../../utilities/firebase/sign-out/sign-out.js";
import { doc, query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../utilities/firebase/firebase.js";

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

    const [places, setPlaces] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'places'), orderBy("createdAt", "desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            //const placeDocs = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                setPlaces([...places, {
                    placeID: doc.id,
                    ...doc.data(),                   
                }])
                //placeDocs.push(doc.data());
            });
            //setPlaces(placeDocs);
            //console.log("Current cities in CA: ", placeDocs.join(", "));
        });
    }, [])
    
    

    return (
        <>
            <Topbar place={allPlaces[0]} />
            <Container containerStyleExtention={"pt-[60px]"}>
                {places.map(place => {
                    return (
                        <ListItem
                            key={place.placeID}
                            place={place}
                        />
                    )
                })}
                <button onClick={handleSignOut}>Log out</button>
            </Container>
        </>
    )
}

export default List;