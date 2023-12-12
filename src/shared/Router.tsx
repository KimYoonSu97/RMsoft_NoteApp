import React from "react";
import { Route, Routes } from "react-router";
import RootLayout from "../components/ui/RootLayout";
import Main from "../Pages/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/:notebookId" element={<Main />} />
        <Route path="/:notebookId/:memoId" element={<Main />} />
      </Route>
    </Routes>
  );
};

export default Router;
