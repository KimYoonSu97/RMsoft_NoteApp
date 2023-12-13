import { useEffect, useState } from "react";
import styled from "styled-components";
import { ChevronRight, ChevronDown, Plus } from "lucide-react";
import shortid from "shortid";
import { useLocation, useNavigate } from "react-router-dom";
import Notebook from "./Notebook";

const NotebookList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [notebooks, setNotebooks] = useState<string[]>([]);

  useEffect(() => {
    const notebooks = Object.keys(localStorage).filter(
      (item) => item.length < 13
    );
    setNotebooks(notebooks);
  }, [location]);

  const addNoteBook = () => {
    const newNotebook = {
      title: window.prompt("노트북 이름을 입력해주세요"),
      color: "pink",
      memo: [],
    };
    const noteId = shortid.generate();
    localStorage.setItem(noteId, JSON.stringify(newNotebook));
    setIsOpen(true);
    navigate(`/${noteId}`);
  };

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const onClickNotebookMenu = () => {
    navigate(`/`);
  };

  return (
    <S.Container>
      <S.Tab>
        <S.IsOpenButton
          onClick={openHandler}
          children={
            isOpen ? (
              <ChevronDown color="gray" />
            ) : (
              <ChevronRight color="gray" />
            )
          }
        />
        <S.MenuTitle onClick={onClickNotebookMenu}>NOTEBOOKS</S.MenuTitle>
        <S.AddNoteBookButton
          onClick={addNoteBook}
          children={<Plus color="gray" />}
        />
      </S.Tab>
      {isOpen &&
        notebooks.length > 0 &&
        notebooks.map((noteBook, index) => {
          return (
            <Notebook
              key={noteBook}
              notebook={noteBook}
              setNotebooks={setNotebooks}
            />
          );
        })}
    </S.Container>
  );
};

export default NotebookList;

const S = {
  Container: styled.div`
    background-color: white;
    width: 100%;
  `,
  Tab: styled.div`
    padding: 10px 0;
    display: flex;
    gap: 4px;
    align-items: center;
  `,
  AddNoteBookButton: styled.div`
    margin-left: auto;
    cursor: pointer;
  `,
  IsOpenButton: styled.div`
    cursor: pointer;
  `,
  ContentBox: styled.div``,
  MenuTitle: styled.div`
    cursor: pointer;
  `,
};
