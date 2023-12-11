import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import shortid from "shortid";
import styled from "styled-components";

interface NoMemoProps {
  setIsMemoExist: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoMemo = ({ setIsMemoExist }: NoMemoProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = () => {
    console.log("새 메모 작성하기");
    // const newMemo = {
    const notebookId = location.search.replace("?note=notebook", "");
    const newMemo = {
      description: "",
      date: new Date().toLocaleDateString(),
    };
    const memoId = `${notebookId}-${shortid.generate()}`;

    localStorage.setItem(memoId, JSON.stringify(newMemo));
    setIsMemoExist(true);
    navigate(`/?memo=${memoId}`);
  };
  return (
    <S.Container>
      <div>새 메모를 작성해 주세요.</div>
      <button onClick={onClick}>새메모 작성하기</button>
    </S.Container>
  );
};

export default NoMemo;

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  `,
};
