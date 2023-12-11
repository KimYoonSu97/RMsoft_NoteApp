import React, { useState } from "react";
import { getNotebookName } from "../../../util/getNotebookName";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Trash2 } from "lucide-react";

interface NotebookProps {
  notebook: string;
}

const Notebook = ({ notebook }: NotebookProps) => {
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);

  const onClick = () => {
    navigate(`/?note=${notebook}`);
  };
  const onMouseOver = () => {
    setShowDelete(true);
  };
  const onMouseLeave = () => {
    setShowDelete(false);
  };
  const removeNoteBook = () => {
    navigate("/");
    if (window.confirm("노트북을 삭제하시겠습니까?")) {
      localStorage.removeItem(notebook);
    } else {
      navigate(-1);
    }
  };

  return (
    <S.Container
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {getNotebookName(notebook).title}
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
};
