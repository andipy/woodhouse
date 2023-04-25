import { auth } from "../firebase.js";
import { sendPasswordResetEmail } from "firebase/auth";

//function to send the email to reset the password
const sendEmailToResetPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email);
}

export { sendEmailToResetPassword };