import styled from "styled-components";
import Editor from "../editor/Editor";
import { useLocation } from "react-router-dom";
import { MemoListAtom, MemoType } from "../../store/state";
import { useAtom } from "jotai";

const ContentBox = () => {
  const location = useLocation();

  const [memoList, setMemoList] = useAtom(MemoListAtom);

  return (
    <S.Container $isMemoExist={memoList}>
      {memoList.length > 0 && location.pathname.split("/")[2] ? (
        <Editor />
      ) : (
        <S.NoNote>노트북을 선택하고 메모를 추가해보세요.</S.NoNote>
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
    width: calc(100% - 500px);
    height: 100vh;
    border-right: 1px solid #e0e0e0;
  `,
  NoNote: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    font-weight: bold;
    color: #757575;
  `,
};
