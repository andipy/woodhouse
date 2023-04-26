import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './contexts/auth-context/auth-context.jsx';

import List from "./routes/list/list.jsx";
import Detail from "./routes/detail/detail.jsx";
import EditWhere from "./routes/edit-where/edit-where.jsx";
import SignUp from "./routes/sign-up/sign-up.jsx";
import LogIn from "./routes/log-in/log-in.jsx";
import ResetPassword from "./routes/reset-password/reset-password.jsx";
import VerifyYourEmail from "./routes/verify-your-email/verify-your-email.jsx";

const App = () => {

  const [currentUser, setCurrentUser] = useContext(AuthContext);

  console.log(currentUser, "from app.js")

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
    }
  ]

  const routeBasedOnAuthStatus = (isPrivate, element) => {
    if (isPrivate) {
      if (currentUser) {
        if (currentUser.emailVerified) {
          return element
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
