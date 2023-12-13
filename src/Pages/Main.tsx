import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentBox from "../components/contentBox/ContentBox";
import MemoBar from "../components/sideBar/MemoBar";
import { useLocation, useParams } from "react-router-dom";
import { MemoListAtom } from "../store/state";
import { useAtom } from "jotai";
import { getMemoListByNotebookId } from "../util/getMemoListByNotebookId";

const Main = () => {
  const location = useLocation();
  const params = useParams();

  return (
    <S.Container>
      <MemoBar />
      <ContentBox />
    </S.Container>
  );
};

export default Main;

const S = {
  Container: styled.div`
    display: flex;
    height: 100%;
    /* height: calc(100vh - 50px); */
    /* width: 100%; */
  `,
};
