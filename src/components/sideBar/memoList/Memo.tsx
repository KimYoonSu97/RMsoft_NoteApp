import React, { useEffect, useState } from "react";
import { MemoListAtom, MemoType } from "../../../store/state";
import styled from "styled-components";
import { Trash2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { createEditor } from "lexical";
import { $getRoot } from "lexical";
import { useAtom } from "jotai";
import { set } from "lodash";

interface MemoProps {
  memo: MemoType;
}

const Memo = ({ memo }: MemoProps) => {
  const [showDelete, setShowDelete] = useState(false);
  const [memoList, setMemoList] = useAtom(MemoListAtom);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("메모 리렌더링");
    const editor = createEditor({
      editable: false,
    });
    const editorState = JSON.stringify(memo.editorState);
    const parsedEditorState = editor.parseEditorState(editorState);
    const editorStateTextString = parsedEditorState.read(() =>
      $getRoot().getTextContent()
    );
    setTitle(editorStateTextString.split("\n\n")[0]);
    setBody(editorStateTextString.split("\n\n")[1]);
    setDate(new Date(memo.date).toLocaleString());
  }, [memo]);

  const onClick = () => {
    navigate(`/${param.notebookId}/${memo.id}`);
  };

  const onMouseOver = () => {
    setShowDelete(true);
  };
  const onMouseLeave = () => {
    setShowDelete(false);
  };

  const removeMemo = () => {
    if (window.confirm("메모를 삭제하시겠습니까?")) {
      console.log(memo.id);
      localStorage.removeItem(memo.id);
      // setMemoList(memoList.filter((memo) => memo.id !== memo.id));
      navigate(`/${param.notebookId}`);
    } else {
      return;
    }
  };

  if (!memo.editorState) return <div>loading...</div>;

  return (
    <S.Container onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <S.Contents onClick={onClick}>
        <S.Title>{title}</S.Title>
        <S.Body> {body ? body : "내용 없음"}</S.Body>
        {new Date(memo.date).toLocaleString()}
        {memo.date && <div>{memo.date.toLocaleString()}</div>}
      </S.Contents>
      {showDelete && (
        <S.removeButton onClick={removeMemo}>
          <Trash2 color="gray" />
        </S.removeButton>
      )}
    </S.Container>
  );
};

export default Memo;

const S = {
  Container: styled.div`
    display: flex;
    width: 100%;
    position: relative;
    border: 1px solid black;
    cursor: pointer;
  `,
  Contents: styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  `,
  Title: styled.div`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  Body: styled.div`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  removeButton: styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
