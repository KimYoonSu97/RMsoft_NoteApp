import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentBox from "../components/contentBox/ContentBox";
import MemoBar from "../components/sideBar/MemoBar";
import NoteBookBar from "../components/sideBar/NoteBookBar";
import { useLocation } from "react-router-dom";
import { useGetMemoExist } from "../hooks/useGetMemoExist";

const Main = () => {
  const location = useLocation();
  const [isNoteBookExist, setIsNoteBookExist] = useState(false);
  const memoExist = useGetMemoExist();

  useEffect(() => {
    setIsNoteBookExist(memoExist);
    if (location.search.includes("memo")) {
      setIsNoteBookExist(true);
    }
  }, [location]);

  return (
    <S.Container>
      <NoteBookBar />
      {isNoteBookExist && <MemoBar />}
      <ContentBox />
    </S.Container>
  );
};

export default Main;

const S = {
  Container: styled.div`
    display: flex;
    height: calc(100vh - 50px);
  `,
};
