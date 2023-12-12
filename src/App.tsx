import { BrowserRouter } from "react-router-dom";
import Router from "./shared/Router";
import styled from "styled-components";
import NoteBookBar from "./components/sideBar/NoteBookBar";
import MemoBar from "./components/sideBar/MemoBar";

const App = () => {
  return (
    <S.Container>
      <NoteBookBar />
      <MemoBar />
    </S.Container>

    // <BrowserRouter>
    //   <Router />
    // </BrowserRouter>
  );
};

export default App;

const S = {
  Container: styled.div`
    display: flex;
  `,
};
