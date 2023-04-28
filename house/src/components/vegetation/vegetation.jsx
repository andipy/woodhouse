import React, { useState, useEffect, useContext } from "react";
import { CurrentUserDocContext } from "../../contexts/current-user-doc-context/current-user-doc-context";

import { db } from "../../utilities/firebase/firebase.js";
import { updateDoc, Timestamp, doc, arrayUnion } from "firebase/firestore";
import { storage } from "../../utilities/firebase/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Vegetation = ({ place }) => {

    const { vegetation, placeID } = place;
    const [currentUserDoc, setCurrentUserDoc] = useContext(CurrentUserDocContext);

    const [isEmptyState, setIsEmptyState] = useState(false);
    useEffect(() => {
        if ( vegetation.description && vegetation.types ) {
            setIsEmptyState(false)
        } else {
            setIsEmptyState(true)
        }
    }, [])

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
                        return updateDoc(docRef, {
                            'vegetation.media': arrayUnion({
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
            //window.location.reload(true);
        }
    }

    const input = {
        label: null,
        name: "firstName",
        type: "file",
        accept: "image/*",
        placeholder: "Aggiungi una immagine di copertina",
        required: true
    }

    return (
        <section>
            <h3 className="text-xl font-bold">Vegetazione</h3>
            {isEmptyState &&
                <button className="btn-secondary-enabled">Descrivi la vegetazione del lugo</button>
            }
            {/* {!isEmptyState &&
                <>
                    <div className="flex items-center gap-1">
                        {vegetation.types.map((type, index) => {
                            return (
                                <span key={index} className="py-1 px-2 rounded-full bg-purple-100 self-start">{type}</span>
                            )
                        })}
                    </div>

                    <p>{vegetation.description ? vegetation.description : "Descrivi la vegetaione del luogo"}</p>
                </>
            } */}

            {vegetation.media.length === 1 &&
                <div className="mt-2">
                    {vegetation.media.map((elem, index) => {
                        if ( elem.mediaType.includes("image") ) {
                            return <img key={index} className="object-cover w-full" src={elem.mediaURL} alt="" />
                        }
                        if ( elem.mediaType.includes("video") ) {
                            return <video key={index} className="object-cover w-full" src={elem.mediaURL} controls={true}></video>
                        }
                    })}                    
                </div>
            }
            {vegetation.media.length > 1 &&
                <div className="flex overflow-x-scroll gap-2 overflow-y-hidden w-[112.5%] ml-[-8%] px-[8%] mt-2 md:overflow-x-visible md:overflow-y-visible md:flex-wrap md:w-[100%] md:ml-[0%] md:px-[0%]">
                    {vegetation.media.map((elem, index) => {
                        if ( elem.mediaType.includes("image") ) {
                            return <img key={index} className="object-cover h-64" src={elem.mediaURL} alt="" />
                        }
                        if ( elem.mediaType.includes("video") ) {
                            return <video key={index} className="object-cover h-64" src={elem.mediaURL} controls={true}></video>
                        }
                    })}
                </div>
            }
            <form onSubmit={handleFormSubmit}>
                    <input
                        label={input.label}
                        name={input.name}
                        type={input.type}
                        accept={input.accept}
                        onChange={handleInputChange}
                        placeholder={input.placeholder}
                    />
                    <button className="btn-secondary-enabled">Carica immagine</button>
                </form>

            
        </section>
    )
}

export default Vegetation;