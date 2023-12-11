import React from "react";
import styled from "styled-components";
import { useGetMemoData } from "../../hooks/useGetMemoData";

const MemoBar = () => {
  const memo = useGetMemoData();
  console.log(memo);

  return <S.Container>MemoBar</S.Container>;
};

export default MemoBar;

const S = {
  Container: styled.div`
    background-color: orange;
    max-width: 200px;
    width: 100%;
  `,
};
