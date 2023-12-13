import styled from "styled-components";
import MemoList from "./memoList/MemoList";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";
import { Plus } from "lucide-react";
import { getInitialMemo } from "../../util/getInitialMemo";

const MemoBar = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

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
      <MemoList />
      {params.notebookId ? (
        <S.AddMemoButton onClick={onClick}>
          <div>
            <Plus color="#757575" size={16} />
          </div>
          메모추가하기
        </S.AddMemoButton>
      ) : (
        <S.NoNote>노트북을 선택하세요.</S.NoNote>
      )}
    </S.Container>
  );
};

export default MemoBar;

const S = {
  Container: styled.div`
    border-right: 1px solid #e0e0e0;
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  NoNote: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    font-weight: bold;
  `,
  AddMemoButton: styled.button`
    border: none;
    font-size: large;
    color: #757575;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    gap: 10px;
  `,
};
