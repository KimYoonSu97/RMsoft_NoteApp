import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetMemoData } from "../../hooks/useGetMemoData";
import Memo from "./memoList/Memo";
import { useAtom } from "jotai";
import { MemoListAtom } from "../../store/state";

const MemoBar = () => {
  const [memo, setMemo] = useAtom(MemoListAtom);
  console.log(memo);
  return (
    <S.Container>
      {memo!.map((memo, index) => {
        return <Memo key={index} memo={memo} />;
      })}
      memo
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
