import React, { useState, useEffect, useContext, createContext } from "react";
import { AuthContext } from "../auth-context/auth-context.jsx";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utilities/firebase/firebase.js";

export const CurrentUserDocContext = createContext();

export const CurrentUserDocContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    const [currentUserDoc, setCurrentUserDoc] = useState({});
    useEffect(() => {
        const getUserDoc = async () => {
        try {
            const docRef = doc(db, 'users', currentUser.uid);
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
                setCurrentUserDoc(docSnap.data())
            } else {
                console.log("non sono riuscito a compilare il currentUserDocContext")
            }
        } catch (error) {
            console.log(error.message, "non sono riuscito a compilare il currentUserDocContext")
        }
        }

        if (currentUser) {
            getUserDoc();
        }
    }, [currentUser])

    return (
        <CurrentUserDocContext.Provider value={[currentUserDoc, setCurrentUserDoc]}>
            { children }
        </CurrentUserDocContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(CurrentUserDocContext);
}