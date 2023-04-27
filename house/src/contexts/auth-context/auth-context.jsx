import React, { useState, useEffect, useContext, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utilities/firebase/firebase.js";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                setCurrentUser(user);
                console.log(currentUser, "from auth context");
            } else {
                // User is signed out
                console.log('user is signed out');
            }
        });
    }, [currentUser]);

    return (
        <AuthContext.Provider value={[currentUser, setCurrentUser]}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}