import styled from "styled-components";
import NoMemo from "./NoMemo";
import Editor from "../editor/Editor";
import { useLocation, useParams } from "react-router-dom";
import { MemoListAtom, MemoType } from "../../store/state";
import { useAtom } from "jotai";
import { getMemoListByNotebookId } from "../../util/getMemoListByNotebookId";

const ContentBox = () => {
  const location = useLocation();

  const [memoList, setMemoList] = useAtom(MemoListAtom);

  return (
    <S.Container $isMemoExist={memoList}>
      {memoList.length > 0 && location.pathname.split("/")[2] ? (
        <Editor />
      ) : (
        <NoMemo />
      )}
    </S.Container>
  );
};

export default ContentBox;

interface ContainerProps {
  $isMemoExist: MemoType[];
}

const S = {
  Container: styled.div<ContainerProps>`
    background-color: green;
    width: calc(100% - 500px);
  `,
};
