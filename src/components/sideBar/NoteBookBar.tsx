import React from "react";
import styled from "styled-components";

const NoteBookBar = () => {
  return <S.Container>{/* <NoteBookList />  */}</S.Container>;
};

export default NoteBookBar;

const S = {
  Container: styled.div`
    background-color: red;
    max-width: 200px;
    width: 100%;
    height: calc(100vh - 50px);
  `,
};
