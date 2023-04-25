import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// function to sign up a new user with email and password
const signUpWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}

// function to log in with email and password
const logInWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
}

export { signUpWithEmailAndPassword, logInWithEmailAndPassword };