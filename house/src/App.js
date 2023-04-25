import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import List from "./routes/list/list.jsx";
import Detail from "./routes/detail/detail.jsx";
import EditWhere from "./routes/edit-where/edit-where.jsx";
import SignUp from "./routes/sign-up/sign-up.jsx";
import LogIn from "./routes/log-in/log-in.jsx";

const App = () => {

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
      isPrivate: false
    },{
      slug: "places/:placeID",
      element: <Detail />,
      isPrivate: false
    },{
      slug: "places/:placeId/edit-where",
      element: <EditWhere />,
      isPrivate: false
    }
  ]

  return (
    <Routes>
      <Route index element={<Navigate to="/sign-up" />} />
      {routes.map((route, index) => {
        const { slug, element } = route;
        return (
          <Route
            key={index}
            path={`/${slug}`}
            element={element}
          />
        )
      })}
    </Routes>
  );
}

export default App;
