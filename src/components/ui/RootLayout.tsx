import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import TopBar from "../topBar/TopBar";

const RootLayout = () => {
  return (
    <S.Container>
      <S.Inner>
        <TopBar />
        <Outlet />
      </S.Inner>
    </S.Container>
  );
};

export default RootLayout;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
  `,
  Inner: styled.div`
    min-width: 1400px;
    max-width: 1920px;
    width: 100%;
  `,
};
