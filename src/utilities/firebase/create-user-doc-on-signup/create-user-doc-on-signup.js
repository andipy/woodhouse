import { db } from "../firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";

const createUserDocumentOnSignUp = async (user, info) => {
    const userDocRef = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        return await setDoc(userDocRef, info);
    }
}

export { createUserDocumentOnSignUp };