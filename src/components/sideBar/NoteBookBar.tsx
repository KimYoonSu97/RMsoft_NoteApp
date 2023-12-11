import React from "react";
import styled from "styled-components";
import NoteBookList from "./noteBookList/NoteBookList";

const NoteBookBar = () => {
  return (
    <S.Container>
      <NoteBookList />
    </S.Container>
  );
};

export default NoteBookBar;

const S = {
  Container: styled.div`
    background-color: red;
    max-width: 200px;
    width: 100%;
  `,
};
