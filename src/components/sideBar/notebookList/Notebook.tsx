import React, { useState } from "react";
import { getNotebookName } from "../../../util/getNotebookName";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Trash2 } from "lucide-react";

interface NotebookProps {
  notebook: string;
  setNotebooks: React.Dispatch<React.SetStateAction<string[]>>;
}

const Notebook = ({ notebook, setNotebooks }: NotebookProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);

  const onClick = () => {
    navigate(`/${notebook}`);
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

      const notebooks = Object.keys(localStorage).filter((item) =>
        item.includes(notebook)
      );

      if (notebooks.length > 0) {
        notebooks.forEach((item) => {
          localStorage.removeItem(item);
        });
      }

      setNotebooks((prev) => prev.filter((item) => item !== notebook));
      navigate("/");
    } else {
      return;
    }
  };

  return (
    <S.Container
      $SelectBgColor={notebook === location.pathname.split("/")[1]}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <S.InfoArea>
        <S.Cover $color={getNotebookName(notebook).color} />
        <S.Title onClick={onClick}>{getNotebookName(notebook).title}</S.Title>
      </S.InfoArea>
      {showDelete && (
        <div onClick={removeNoteBook}>
          <Trash2 color="gray" size={16} />
        </div>
      )}
    </S.Container>
  );
};

export default Notebook;

interface ContainerProps {
  $SelectBgColor: boolean;
}

interface CoverProps {
  $color: string;
}

const S = {
  Container: styled.div<ContainerProps>`
    /* background-color: pink; */
    cursor: pointer;
    padding: 10px 10px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) =>
      props.$SelectBgColor && "background-color: #f1f1f1; font-weight: bold;"}
  `,
  InfoArea: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  Cover: styled.div<CoverProps>`
    width: 20px;
    height: 30px;
    border-radius: 3px;
    background-color: ${(props) => props.$color};
  `,
  Title: styled.div``,
};
