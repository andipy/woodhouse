import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth-context/auth-context.jsx";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utilities/firebase/firebase.js";
import { storage } from "../../utilities/firebase/firebase.js";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

import Input from "../input/input";

const UploadProfilePictureForm = () => {

    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const [user, setUser] = useState({});  
    useEffect(() => {
        const getUserDoc = async () => {
          try {
            const docRef = doc(db, 'users', currentUser.uid);
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
                setUser(docSnap.data())
            } else {
                console.log("l'utente non esiste o non è loggato")
            }
          } catch (error) {
            console.log(error.message)
          }
        }
    
        if (currentUser) {
          getUserDoc();
        }
    }, [])    

    const [media, setMedia] = useState("")
    const handleInputChange = (e) => {
        setMedia(e.target.files[0])
    }

    const [isUploading, setIsUploading] = useState(false)
    const handleFormSubmit = async (e) => {
        e.preventDefault();        

        if (!isUploading) {
            setIsUploading(true);

            const storageRef = ref(storage, `${media.name}${Math.floor(Math.random()*1000000) + Math.floor(Math.random()*1000000)}`);

            if (media) {
                try {
                    await uploadBytes(storageRef, media)
                    .then(snapshot => {
                        return getDownloadURL(snapshot.ref)
                    })
                    .then(downloadURL => {
                        const docRef = doc(db, 'users', currentUser.uid);
                        return updateDoc(docRef, {...user, photoURL: downloadURL})
                    });
                } catch (error) {
                    console.log(error.message,"errore nel caricamento del file sullo storage")
                }
            }

            setIsUploading(false);
            window.location.reload(true);
        }
    }

    const input = {
        label: "First name",
        name: "firstName",
        type: "file",
        accept: "image/*",
        placeholder: "Upload a profile picture",
        required: true
    }

    return (
        <form
            onSubmit={handleFormSubmit}
        >
            <Input
                label={input.label}
                name={input.name}
                type={input.type}
                accept={input.accept}
                placeholder={input.placeholder}
                required={input.required}
                onChange={handleInputChange}
            />
            <button>{isUploading ? "Sto caricando, attendi" : "Carica immagine"}</button>
        </form>
    )
}

export default UploadProfilePictureForm