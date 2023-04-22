import React from "react";
import { Routes, Route } from "react-router-dom";

import List from "./components/routes/list/list.jsx";
import Detail from "./components/routes/detail/detail.jsx";
import EditWhere from "./components/routes/edit-where/edit-where.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/house/:id" element={<Detail />} />
      <Route path="/house/:id/edit-where" element={<EditWhere />} />
    </Routes>
  );
}

export default App;
