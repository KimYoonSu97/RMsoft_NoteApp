import styled from "styled-components";
import MemoList from "./memoList/MemoList";
import { useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";
import { getInitialMemo } from "../../util/getInitialMemo";

const MemoBar = () => {
  const params = useParams();
  const navigate = useNavigate();

  // const onClick = () => {
  //   const memoId = params.notebookId + shortid.generate();

  //   const newMemo = {
  //     editorState: getInitialMemo(),
  //     date: new Date(),
  //     id: memoId,
  //   };
  //   localStorage.setItem(memoId, JSON.stringify(newMemo));
  //   navigate(`/${params.notebookId}/?memo=${memoId}`);
  // };

  return (
    <S.Container>
      {/* <MemoList /> */}
      {/* <button onClick={onClick}>메모추가하기</button> */}
    </S.Container>
  );
};

export default MemoBar;

const S = {
  Container: styled.div`
    background-color: orange;
    width: 300px;
  `,
};
