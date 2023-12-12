import React, { useState } from "react";
import { getNotebookName } from "../../../util/getNotebookName";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Trash2 } from "lucide-react";
import { useAtom } from "jotai";
import { MemoListAtom, MemoType, NotebookListAtom } from "../../../store/state";

interface NotebookProps {
  notebook: string;
  setNotebooks: React.Dispatch<React.SetStateAction<string[]>>;
}

const Notebook = ({ notebook, setNotebooks }: NotebookProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [memo, setMemo] = useAtom(MemoListAtom);

  const [showDelete, setShowDelete] = useState(false);

  const onClick = () => {
    const notebookId = location.search.replace("?memo=", "");

    const memoList = Object.keys(localStorage).filter((item) => {
      return item.includes(notebookId);
    });

    let memoData: MemoType[] = [];
    if (memoList) {
      memoList.forEach((item: string) => {
        const memoItem = JSON.parse(
          localStorage.getItem(item) || ""
        ) as MemoType;
        return memoData.push(memoItem);
      });
      setMemo(memoData);
    }

    navigate(`/?note=${notebook}`);
  };
  const onMouseOver = () => {
    setShowDelete(true);
  };
  const onMouseLeave = () => {
    setShowDelete(false);
  };
  const removeNoteBook = () => {
    if (window.confirm("노트북을 삭제하시겠습니까?")) {
      localStorage.removeItem(notebook);
      setNotebooks((prev) => prev.filter((item) => item !== notebook));
      navigate("/");
    } else {
      return;
    }
  };

  return (
    <S.Container onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <S.Title onClick={onClick}>{getNotebookName(notebook).title}</S.Title>
      {showDelete && (
        <div onClick={removeNoteBook}>
          <Trash2 color="gray" />
        </div>
      )}
    </S.Container>
  );
};

export default Notebook;

const S = {
  Container: styled.div`
    background-color: pink;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Title: styled.div``,
};
