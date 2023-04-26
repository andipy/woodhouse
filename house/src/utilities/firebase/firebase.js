import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzPd4QaInVi4P_TjBhiRy6KI_0lnMabDA",
  authDomain: "woodhouse-9c542.firebaseapp.com",
  projectId: "woodhouse-9c542",
  storageBucket: "woodhouse-9c542.appspot.com",
  messagingSenderId: "677698152037",
  appId: "1:677698152037:web:365d250833963ac656488c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore();
const storage = getStorage();

export { firebaseApp, auth, db, storage };