import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ChevronRight, ChevronDown, Plus } from "lucide-react";
import shortid from "shortid";
import { useLocation, useNavigate } from "react-router-dom";
import { getNotebookName } from "../../../util/getNotebookName";
import Notebook from "./Notebook";

const NoteBookList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [noteBooks, setNoteBooks] = useState<string[]>([]);

  useEffect(() => {
    const noteBooks = Object.keys(localStorage).filter((item) =>
      item.includes("noteBook")
    );
    setNoteBooks(noteBooks);
  }, [location]);

  const addNoteBook = () => {
    const newNoteBooks = {
      title: "새노트북",
      color: "red",
    };
    const noteId = shortid.generate();
    localStorage.setItem("noteBook" + noteId, JSON.stringify(newNoteBooks));
    setIsOpen(true);
    navigate(`/?note=notebook${noteId}`);
  };

  const openHandler = () => {
    setIsOpen(!isOpen);
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
        NOTEBOOKS
        <S.AddNoteBookButton
          onClick={addNoteBook}
          children={<Plus color="gray" />}
        />
      </S.Tab>
      {isOpen &&
        noteBooks.length > 0 &&
        noteBooks.map((noteBook, index) => {
          return <Notebook key={noteBook} notebook={noteBook} />;
        })}
    </S.Container>
  );
};

export default NoteBookList;

const S = {
  Container: styled.div`
    background-color: white;
    width: 100%;
  `,
  Tab: styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
  `,
  AddNoteBookButton: styled.div`
    margin-left: auto;
  `,
  IsOpenButton: styled.div``,
  ContentBox: styled.div``,
};
