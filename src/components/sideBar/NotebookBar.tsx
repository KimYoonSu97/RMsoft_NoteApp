import React from "react";
import styled from "styled-components";

const NotebookBar = () => {
  return <S.Container>{/* <NotebookList /> */}</S.Container>;
};

export default NotebookBar;

const S = {
  Container: styled.div`
    background-color: red;
    max-width: 200px;
    width: 100%;
    height: calc(100vh - 50px);
  `,
};
