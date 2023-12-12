import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MemoListAtom, MemoType } from "../../../store/state";
import { getMemoListByNotebookId } from "../../../util/getMemoListByNotebookId";
import Memo from "./Memo";
import { useAtom } from "jotai";
import styled from "styled-components";

const MemoList = () => {
  const param = useParams();
  const location = useLocation();
  const [memoList, setMemoList] = useAtom(MemoListAtom);

  useEffect(() => {
    const memoListData = getMemoListByNotebookId(param.notebookId!);
    if (!memoListData) return;

    setMemoList(memoListData);
  }, [location.pathname]);

  return (
    <S.Container>
      {memoList.map((memo, index) => {
        return <Memo key={index} memo={memo} setMemoList={setMemoList} />;
      })}
    </S.Container>
  );
};

export default MemoList;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  `,
};
