import styled from "styled-components";
import NoMemo from "./NoMemo";
import Editor from "../editor/Editor";
import { useLocation, useParams } from "react-router-dom";
import { MemoListAtom, MemoType } from "../../store/state";
import { useAtom } from "jotai";

const ContentBox = () => {
  const location = useLocation();

  const [memoList, setMemoList] = useAtom(MemoListAtom);

  return (
    <S.Container $isMemoExist={memoList}>
      {memoList.length > 0 ? <Editor /> : <NoMemo />}

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
