import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './contexts/auth-context/auth-context.jsx';
import { doc, getDoc } from "firebase/firestore";
import { db } from "./utilities/firebase/firebase.js";

import List from "./routes/list/list.jsx";
import Detail from "./routes/detail/detail.jsx";
import EditWhere from "./routes/edit-where/edit-where.jsx";
import SignUp from "./routes/sign-up/sign-up.jsx";
import LogIn from "./routes/log-in/log-in.jsx";
import ResetPassword from "./routes/reset-password/reset-password.jsx";
import VerifyYourEmail from "./routes/verify-your-email/verify-your-email.jsx";
import UploadProfilePicture from "./routes/upload-profile-picture/upload-profile-picture.jsx";

const App = () => {

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
  }, [currentUser])

  const routes = [
    {
      slug: "sign-up",
      element: <SignUp />,
      isPrivate: false
    },{
      slug: "log-in",
      element: <LogIn />,
      isPrivate: false
    },{
      slug: "places",
      element: <List />,
      isPrivate: true
    },{
      slug: "places/:placeID",
      element: <Detail />,
      isPrivate: true
    },{
      slug: "places/:placeId/edit-where",
      element: <EditWhere />,
      isPrivate: true
    },{
      slug: "your-email-to-recover-password",
      element: <ResetPassword />,
      isPrivate: false
    },{
      slug: "verify-your-email",
      element: <VerifyYourEmail />,
      isPrivate: false
    },{
      slug: "upload-profile-picture",
      element: <UploadProfilePicture />,
      isPrivate: true
    }
  ]

  const routeBasedOnAuthStatus = (isPrivate, element) => {
    if (isPrivate) {
      if (currentUser) {
        if (currentUser.emailVerified) {
          if (!user.photoURL) {
            return <UploadProfilePicture />
          } else {
            return element
          }          
        } else {
          return <VerifyYourEmail />
        }
      } else {
        return <LogIn />
      }
    }

    if (!isPrivate) {      
      return element
    }
  }

  return (
    <Routes>
      <Route index element={<Navigate to="/sign-up" />} />
      {routes.map((route, index) => {
        const { slug, element, isPrivate } = route;
        return (
          <Route
            key={index}
            exact
            path={slug}
            element={routeBasedOnAuthStatus(isPrivate, element)}
          />
        )
      })}
    </Routes>
  );
}

export default App;
