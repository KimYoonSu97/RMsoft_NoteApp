import React from "react";
import styled from "styled-components";
import NotebookList from "./notebookList/NotebookList";

const NotebookBar = () => {
  return (
    <S.Container>
      <NotebookList />
    </S.Container>
  );
};

export default NotebookBar;

const S = {
  Container: styled.div`
    background-color: red;
    max-width: 200px;
    width: 100%;
    height: 100%;
    /* height: 100vh; */
  `,
};