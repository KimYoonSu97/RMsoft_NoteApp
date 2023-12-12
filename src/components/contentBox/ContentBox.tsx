import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetMemoExist } from "../../hooks/useGetMemoExist";
import NoMemo from "./NoMemo";
import Editor from "../editor/Editor";
import { useLocation, useParams } from "react-router-dom";
import { getMemoListByNotebookId } from "../../util/getMemoListByNotebookId";
import { MemoType } from "../../store/state";

const ContentBox = () => {
  const params = useParams();
  const [isMemoExist, setIsMemoExist] = useState<boolean>(false);

  return (
    <S.Container $isMemoExist={getMemoListByNotebookId(params.notebookId!)}>
      {getMemoListByNotebookId(params.notebookId!) ? (
        <Editor />
      ) : (
        <NoMemo setIsMemoExist={setIsMemoExist} />
      )}

      {/* {params.memoId ?? <Editor></Editor>} */}
    </S.Container>
  );
};

export default ContentBox;

interface ContainerProps {
  $isMemoExist: MemoType[] | null;
}

const S = {
  Container: styled.div<ContainerProps>`
    background-color: green;
    width: ${(props) =>
      props.$isMemoExist ? "calc(100% - 400px)" : "calc(100% - 200px)"};
    /* width: calc(100% - 400px); */
  `,
};
