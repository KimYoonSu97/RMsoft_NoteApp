import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentBox from "../components/contentBox/ContentBox";
import MemoBar from "../components/sideBar/MemoBar";
import { useLocation, useParams } from "react-router-dom";
import { useGetMemoExist } from "../hooks/useGetMemoExist";
import { MemoListAtom } from "../store/state";
import { useAtom } from "jotai";
import { getMemoListByNotebookId } from "../util/getMemoListByNotebookId";

const Main = () => {
  const location = useLocation();
  const params = useParams();
  const [isNoteBookExist, setIsNoteBookExist] = useState(false);
  const memoExist = useGetMemoExist();
  const [memo, setMemo] = useAtom(MemoListAtom);

  // useEffect(() => {
  //   setIsNoteBookExist(memoExist);
  //   if (location.search.includes("memo")) {
  //     setIsNoteBookExist(true);
  //   }
  //   if (memo.length > 0) {
  //     setIsNoteBookExist(true);
  //   }
  // }, [location, memo]);

  return (
    <S.Container>
      {getMemoListByNotebookId(params.notebookId!) ? <MemoBar /> : <></>}
      <ContentBox />
    </S.Container>
  );
};

export default Main;

const S = {
  Container: styled.div`
    display: flex;
    height: calc(100vh - 50px);
    /* width: 100%; */
  `,
};
