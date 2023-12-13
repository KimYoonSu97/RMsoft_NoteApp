import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import TopBar from "../topBar/TopBar";
import NotebookBar from "../sideBar/NotebookBar";

const RootLayout = () => {
  return (
    <S.Container>
      <S.Inner>
        <NotebookBar />
        <S.ContentWrapper>
          <Outlet />
        </S.ContentWrapper>
      </S.Inner>
    </S.Container>
  );
};

export default RootLayout;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    /* width: 100vw; */
    align-items: center;
    position: relative;
  `,
  Inner: styled.div`
    min-width: 1400px;
    max-width: 1920px;
    width: 100%;
    position: relative;
  `,
  ContentWrapper: styled.div`
    position: absolute;
    top: 0;
    left: 200px;
    width: 100%;
  `,
};
