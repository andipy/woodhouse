import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";

const signOutCurrentUser = async () => {
    return await signOut(auth);
}

export { signOutCurrentUser };