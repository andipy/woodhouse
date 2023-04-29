import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CurrentUserDocContext } from "../../contexts/current-user-doc-context/current-user-doc-context";
import { AuthContext } from "../../contexts/auth-context/auth-context";

import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../utilities/firebase/firebase.js";

import Input from "../input/input";

const postFormFields = {
    copy: "",
    media: "",
}

const CreateNewPostForm = () => {

    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const [currentUserDoc, setCurrentUserDoc] = useContext(CurrentUserDocContext);

    const params = useParams();

    const [postFields, setPostFields] = useState(postFormFields);
    const handleInputChange = (e) => {        
        if ( e.target.name == 'copy' ) {
            setPostFields({...postFields, [e.target.name]: e.target.value})
        } else if ( e.target.name == 'media' ) {
            setPostFields({...postFields, [e.target.name]: e.target.files[0]})
        }
    }

    const [isUploading, setIsUploading] = useState(false)
    const handleFormSubmit = async (e) => {
        e.preventDefault();        

        if (!isUploading) {
            setIsUploading(true);

            const docRef = collection(db, 'posts');
            const storageRef = ref(storage, `${params.placeID}/posts/${postFields.media.name}${Math.floor(Math.random()*1000000) + Math.floor(Math.random()*1000000)}`);

            if (!postFields.media) {                
                try {
                    await uploadBytes(storageRef, postFields.media)
                    .then(snapshot => {
                        return getDownloadURL(snapshot.ref)
                    })
                    .then(downloadURL => {                        
                        return addDoc(docRef, {
                            placeID: params.placeID,
                            createdAt: Timestamp.now(),
                            updatedAt: Timestamp.now(),
                            content: postFields.copy,
                            authorUID: currentUser.uid,
                            authorPhotoURL: currentUserDoc.photoURL,
                            authorDisplayName: currentUserDoc.displayName,
                            mediaType: "",
                            mediaURL: ""
                        })
                    });
                } catch (error) {
                    console.log(error.message,"errore nel caricamento del file sullo storage")
                }
            }

            if (!postFields.copy) {                
                try {
                    await uploadBytes(storageRef, postFields.media)
                    .then(snapshot => {
                        return getDownloadURL(snapshot.ref)
                    })
                    .then(downloadURL => {                        
                        return addDoc(docRef, {
                            placeID: params.placeID,
                            createdAt: Timestamp.now(),
                            updatedAt: Timestamp.now(),
                            content: "",
                            authorUID: currentUser.uid,
                            authorPhotoURL: currentUserDoc.photoURL,
                            authorDisplayName: currentUserDoc.displayName,
                            mediaType: postFields.media.type,
                            mediaURL: downloadURL
                        })
                    });
                } catch (error) {
                    console.log(error.message,"errore nel caricamento del file sullo storage")
                }
            }

            if (postFields.media && postFields.copy) {                
                try {
                    await uploadBytes(storageRef, postFields.media)
                    .then(snapshot => {
                        return getDownloadURL(snapshot.ref)
                    })
                    .then(downloadURL => {                        
                        return addDoc(docRef, {
                            placeID: params.placeID,
                            createdAt: Timestamp.now(),
                            updatedAt: Timestamp.now(),
                            content: postFields.copy,
                            authorUID: currentUser.uid,
                            authorPhotoURL: currentUserDoc.photoURL,
                            authorDisplayName: currentUserDoc.displayName,
                            mediaType: postFields.media.type,
                            mediaURL: downloadURL
                        })
                    });
                } catch (error) {
                    console.log(error.message,"errore nel caricamento del file sullo storage")
                }
            }

            setIsUploading(false);
            navigate(-1);
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h4 className="text-md md:text-2l text-black font-semibold">Copy</h4>
            <textarea
                type="text"
                rows="6"
                placeholder="Describe this place"
                className="w-full py-2 px-2 border border-solid rounded-lg border-gray-400"
                name="copy"
                required={false}
                onChange={handleInputChange}
            ></textarea>
            <Input
                label="Media"
                type="file"
                accept="image/*, video/*, audio/*"
                placeholder="Upload a media for this post"
                required={false}
                name="media"
                onChange={handleInputChange}
            />
            <button className="btn-primary-enabled">{!isUploading ? "Crea post" : "Sto caricando, attendi..."}</button>
        </form>
    )
}

export default CreateNewPostForm;