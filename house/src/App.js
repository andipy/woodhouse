import React from "react";
import { Routes, Route } from "react-router-dom";

import List from "./routes/list/list.jsx";
import Detail from "./routes/detail/detail.jsx";
import EditWhere from "./routes/edit-where/edit-where.jsx";

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
