import React, { useEffect, useState } from "react";
import { MemoListAtom, MemoType } from "../../../store/state";
import styled from "styled-components";
import { Trash2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { createEditor } from "lexical";
import { $getRoot } from "lexical";
import { useAtom } from "jotai";
import { getDate } from "../../../util/getDate";
import { getPreviewBody } from "../../../util/getPreviewBody";

interface MemoProps {
  memo: MemoType;
}

const Memo = ({ memo }: MemoProps) => {
  const [showDelete, setShowDelete] = useState(false);
  const [memoList, setMemoList] = useAtom(MemoListAtom);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const editor = createEditor({
      editable: false,
    });
    const editorState = JSON.stringify(memo.editorState);
    const parsedEditorState = editor.parseEditorState(editorState);
    const editorStateTextString = parsedEditorState.read(() =>
      $getRoot().getTextContent()
    );

    setTitle(editorStateTextString.split("\n\n")[0]);
    setBody(getPreviewBody(editorStateTextString));
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
      localStorage.removeItem(memo.id);
      setMemoList(memoList.filter((prevMemo) => prevMemo.id !== memo.id));
      navigate(`/${param.notebookId}`);
    } else {
      return;
    }
  };

  if (!memo.editorState) return <div>loading...</div>;

  return (
    <S.Container onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <S.Contents onClick={onClick}>
        <S.Title>{title ? title : "New Note"}</S.Title>
        <S.Body> {body ? body : "No additional text"}</S.Body>
        <S.Date>{getDate(new Date(memo.date))}</S.Date>
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

    cursor: pointer;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
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
    font-weight: bold;
    color: #1a1a1a;
    font-size: large;
  `,
  Body: styled.div`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #757575;
    font-size: medium;
  `,
  Date: styled.div`
    color: #757575;
    font-size: small;
  `,
  removeButton: styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
