import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserDocContext } from "../../contexts/current-user-doc-context/current-user-doc-context";

import { db } from "../../utilities/firebase/firebase.js";
import { updateDoc, Timestamp, doc, arrayUnion } from "firebase/firestore";
import { storage } from "../../utilities/firebase/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Container from "../template/container/container";
import Input from "../input/input";
import IconImage from "../../assets/icons/icon-image.svg"

const Header = ({ place }) => {

    const navigate = useNavigate()

    const { name, media, placeID } = place;
    const [currentUserDoc, setCurrentUserDoc] = useContext(CurrentUserDocContext);

    const [inputMedia, setInputMedia] = useState("")
    const handleInputChange = (e) => {
        setInputMedia(e.target.files[0])
    }

    const [isUploading, setIsUploading] = useState(false)
    const handleFormSubmit = async (e) => {
        e.preventDefault();        

        if (!isUploading) {
            setIsUploading(true);

            const storageRef = ref(storage, `${inputMedia.name}${Math.floor(Math.random()*1000000) + Math.floor(Math.random()*1000000)}`);

            if (inputMedia) {
                try {
                    await uploadBytes(storageRef, inputMedia)
                    .then(snapshot => {
                        return getDownloadURL(snapshot.ref)
                    })
                    .then(downloadURL => {
                        const docRef = doc(db, 'places', placeID);
                        console.log(placeID, "from header")
                        return updateDoc(docRef, {
                            media: arrayUnion({
                                createdAt: Timestamp.now(),
                                updatedAt: Timestamp.now(),
                                authorUID: place.authorUID,
                                authorPhotoURL: currentUserDoc.photoURL,
                                authorDisplayName: currentUserDoc.displayName,
                                mediaType: inputMedia.type,
                                mediaURL: downloadURL
                            })
                        })
                    });
                } catch (error) {
                    console.log(error.message,"errore nel caricamento del file sullo storage")
                }
            }

            setIsUploading(false);
            navigate(-1)
        }
    }

    console.log(place, "from header")    ;

    const input = {
        label: null,
        name: "firstName",
        type: "file",
        accept: "image/*",
        placeholder: "Aggiungi una immagine di copertina",
        required: true
    }
    
    return (
        <>

        <header className="w-full relative flex items-center justify-center">            
            {media.length < 1 &&
                <form onSubmit={handleFormSubmit}>
                    <Input
                        className="w-full h-[40vh] md:h-[50vh]"
                        label={input.label}
                        name={input.name}
                        type={input.type}
                        accept={input.accept}
                        onChange={handleInputChange}
                        placeholder={input.placeholder}
                    />
                    <button className="btn-secondary-enabled absolute bottom-10">Carica immagine</button>
                </form>
            }
            {media.length >= 1 &&
                <>
                    <div className="flex w-[100vw] overflow-x-scroll">
                        {media.map(img => {
                            return (
                                <img className="w-full h-[40vh] md:h-[50vh] object-cover" src={img.mediaURL} />
                            )
                        })}
                        
                    </div>
                    <form className="small-form" onSubmit={handleFormSubmit}>
                        <input
                            className="small-input"
                            label={input.label}
                            name={input.name}
                            type={input.type}
                            accept={input.accept}
                            onChange={handleInputChange}
                            placeholder={input.placeholder}
                        />
                        <button className="btn-secondary-enabled">Carica immagine</button>
                    </form>
                </>
            }            
            <div className="absolute bottom-0 w-full py-1 backdrop-blur-sm bg-black/30">
                <Container containerStyleExtention={"flex items-center"}>              
                    <h1 className="text-lg md:text-2xl text-white font-semibold">{name ? name : "Dai un nome al posto"}</h1>
                </Container>
            </div>
        </header>       
        </>
        
    )
}

export default Header;