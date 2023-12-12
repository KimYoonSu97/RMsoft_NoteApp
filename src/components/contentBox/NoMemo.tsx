import { useAtom } from "jotai";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";
import styled from "styled-components";
import { MemoListAtom } from "../../store/state";

interface NoMemoProps {
  setIsMemoExist: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoMemo = ({ setIsMemoExist }: NoMemoProps) => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [memo, setMemo] = useAtom(MemoListAtom);

  const onClick = () => {
    const memoId = params.notebookId + shortid.generate();
    const newMemo = {
      description: "",
      date: new Date(),
      id: memoId,
    };
    localStorage.setItem(memoId, JSON.stringify(newMemo));

    navigate(`/${params.notebookId}/?memo=${memoId}`);

    // // const newMemo = {
    // const notebookId = location.search.replace("?note=notebook", "");
    // const newMemo = {
    //   description: "",
    //   date: new Date().toLocaleDateString(),
    // };
    // const memoId = `${notebookId}-${shortid.generate()}`;

    // setIsMemoExist(true);
    // setMemo([newMemo]);
    // navigate(`/?memo=${memoId}`);
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
