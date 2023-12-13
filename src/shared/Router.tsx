import { Route, Routes } from "react-router";
import Main from "../Pages/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:notebookId" element={<Main />} />
      <Route path="/:notebookId/:memoId" element={<Main />} />
    </Routes>
  );
};

export default Router;
