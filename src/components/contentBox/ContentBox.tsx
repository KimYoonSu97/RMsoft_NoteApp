import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetMemoExist } from "../../hooks/useGetMemoExist";
import NoMemo from "./NoMemo";
import Editor from "../editor/Editor";
import { useLocation } from "react-router-dom";

const ContentBox = () => {
  const location = useLocation();
  const [isMemoExist, setIsMemoExist] = useState<boolean>(false);
  const memoExist = useGetMemoExist();

  useEffect(() => {
    if (location.search.includes("memo")) {
      setIsMemoExist(true);
    } else {
      setIsMemoExist(false);
    }
  }, [location]);

  return (
    <S.Container>
      {isMemoExist ? <Editor /> : <NoMemo setIsMemoExist={setIsMemoExist} />}
    </S.Container>
  );
};

export default ContentBox;

const S = {
  Container: styled.div`
    background-color: green;
    width: 100%;
  `,
};
