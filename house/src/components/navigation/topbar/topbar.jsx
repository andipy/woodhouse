import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { placeDataStructure } from "../../../utilities/data-structure/place/place-data-structures.js";
import { AuthContext } from '../../../contexts/auth-context/auth-context.jsx';
import { CurrentUserDocContext } from "../../../contexts/current-user-doc-context/current-user-doc-context.jsx";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../utilities/firebase/firebase";

import Container from "../../template/container/container";

import IconBackArrow from "../../../assets/icons/icon-arrow-back-white.svg"

const Topbar = ({ topbarStyleExtention, place }) => {

    const [user, setUser] = useContext(AuthContext);
    const [currentUserDoc, setCurrentUserDoc] = useContext(CurrentUserDocContext);

    const { name } = place;

    const navigate = useNavigate();
    const location = useLocation();

    const [isPlacesList, setIsPlacesList] = useState(true);
    useEffect(() => {
        if ( location.pathname === "/places" ) {
            setIsPlacesList(true)
        } else {
            setIsPlacesList(false)
        }
    }, [])

    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {
        if ( location.pathname.includes("/edit") ) {
            setIsEdit(true)
        } else {
            setIsEdit(false)
        }
    }, [])

    const createNewPlace = async () => {
        const placeCollectionRef = collection(db, 'places');
        const response = await addDoc(placeCollectionRef, {
            ...placeDataStructure,
            authorUID: user.uid,
            authorPhotoURL: currentUserDoc.photoURL,
            authorDisplayName: currentUserDoc.displayName
        } )
    }

    return (
        <nav className={`py-2 fixed w-full z-10 ${topbarStyleExtention}`}>
            <Container containerStyleExtention={`flex ${isPlacesList ? "justify-end items-center" : "justify-between"} ${isEdit ? "flex-col gap-1" : ""}`}>
                {!isPlacesList &&
                    <div className="w-8 h-8 flex items-center justify-center backdrop-blur-sm bg-black/60 rounded-full" onClick={() => navigate(-1)}>
                        <img className="w-6 h-6" src={IconBackArrow} alt="" />
                    </div>
                }

                {/* {!isPlacesList && !isEdit &&
                    <button className="py-2 px-4 bg-purple-600 text-white rounded-md text-sm">
                        + Add media
                    </button>
                } */}
                {isPlacesList &&
                    <button
                        className="py-2 px-4 bg-purple-600 text-white rounded-md text-sm"
                        onClick={createNewPlace}
                    >
                        + Add new place
                    </button>
                }
                {isEdit &&
                    <h1 className="text-lg md:text-2xl text-black font-bold">{name}</h1>
                }
            </Container>
        </nav>
    )
}

export default Topbar;