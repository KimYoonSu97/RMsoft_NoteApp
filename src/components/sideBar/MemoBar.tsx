import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Memo from "./memoList/Memo";
import { useAtom } from "jotai";
import { MemoListAtom } from "../../store/state";
import MemoList from "./memoList/MemoList";
import { useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";
import { createEditor } from "lexical";
import { getInitialMemo } from "../../util/getInitialMemo";

const MemoBar = () => {
  const params = useParams();
  const navigate = useNavigate();

  const onClick = () => {
    const memoId = params.notebookId + shortid.generate();

    const newMemo = {
      editorState: getInitialMemo(),
      date: new Date(),
      id: memoId,
    };
    localStorage.setItem(memoId, JSON.stringify(newMemo));
    navigate(`/${params.notebookId}/?memo=${memoId}`);
  };

  return (
    <S.Container>
      <MemoList />
      <button onClick={onClick}>메모추가하기</button>
    </S.Container>
  );
};

export default MemoBar;

const S = {
  Container: styled.div`
    background-color: orange;
    /* max-width: 200px; */
    width: 200px;
  `,
};
