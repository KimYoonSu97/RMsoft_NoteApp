import React from "react";
import styled from "styled-components";
import { useGetMemoExist } from "../../hooks/useGetMemoExist";
import NoMemo from "./NoMemo";

const ContentBox = () => {
  const memoExist = useGetMemoExist();

  return <S.Container>{memoExist ? "에디터" : <NoMemo />}</S.Container>;
};

export default ContentBox;

const S = {
  Container: styled.div`
    background-color: green;
    width: 100%;
  `,
};
