import { auth } from "../firebase.js";
import { sendEmailVerification } from "firebase/auth";


// function to send an email to a user to verify their account
const sendEmailToVerifyAccount = async (currentUser) => {
    return await sendEmailVerification(currentUser);
}

export { sendEmailToVerifyAccount };