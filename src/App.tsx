import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "./components/topBar/TopBar";
import NoteBookBar from "./components/sideBar/NoteBookBar";
import ContentBox from "./components/contentBox/ContentBox";
import MemoBar from "./components/sideBar/MemoBar";
import { BrowserRouter } from "react-router-dom";
import Router from "./shared/Router";

const App = () => {
  // const [isNoteBookExist, setIsNoteBookExist] = useState(false);
  // const localStorageNoteBook = Object.keys(localStorage);

  // useEffect(() => {
  //   // const localStorageNoteBook = localStorage.getItem("noteBooks");

  //   if (!localStorageNoteBook) {
  //     setIsNoteBookExist(false);
  //   } else {
  //     setIsNoteBookExist(true);
  //   }
  // }, [localStorageNoteBook]);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;

const S = {
  Container: styled.div``,

  BottomContainer: styled.div`
    display: flex;
    height: calc(100vh - 50px);
  `,
};

// <S.RootLayout>
//   <S.Container>
//     <TopBar />
//     <S.BottomContainer>
//       <NoteBookBar />

//       {isNoteBookExist ?? <MemoBar />}
//       <ContentBox />
//     </S.BottomContainer>
//   </S.Container>
// </S.RootLayout>
