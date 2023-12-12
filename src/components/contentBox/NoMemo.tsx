import { useAtom } from "jotai";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";
import styled from "styled-components";
import { MemoListAtom } from "../../store/state";
import { createEditor } from "lexical";
import { getInitialMemo } from "../../util/getInitialMemo";

const NoMemo = () => {
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

    navigate(`/${params.notebookId}/${memoId}`);
  };
  return (
    <S.Container>
      <div>새 메모를 작성해 주세요.</div>
      <button onClick={onClick}>새메모 작성하기</button>
    </S.Container>
  );
};

export default NoMemo;

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  `,
};
