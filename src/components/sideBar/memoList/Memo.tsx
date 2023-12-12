import React, { useState } from "react";
import { MemoType } from "../../../store/state";
import styled from "styled-components";
import { Trash2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import {
  LexicalNode,
  createEditor,
  LexicalCommand,
  EditorState,
} from "lexical";
import MemoPreview from "./MemoPreview";
import { $getRoot } from "lexical";

interface MemoProps {
  memo: MemoType;
  setMemoList: React.Dispatch<React.SetStateAction<MemoType[]>>;
}

const Memo = ({ memo, setMemoList }: MemoProps) => {
  const [showDelete, setShowDelete] = useState(false);
  const param = useParams();
  const navigate = useNavigate();
  const editor = createEditor({
    editable: false,
  });

  const onClick = () => {
    navigate(`/${param.notebookId}/?memo=${memo.id}`);
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
      setMemoList((prev) => prev.filter((item) => item.id !== memo.id));
      navigate(`/`);
    } else {
      return;
    }
  };

  if (!memo.editorState) return <div>loading...</div>;
  const editorState = JSON.stringify(memo.editorState);

  const parsedEditorState = editor.parseEditorState(editorState);
  const editorStateTextString = parsedEditorState.read(() =>
    $getRoot().getTextContent()
  );
  console.log(editorStateTextString);

  const title = editorStateTextString.split("\n\n")[0];
  const body = editorStateTextString.split("\n\n")[1];

  return (
    <S.Container onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <div onClick={onClick}>
        {title}
        {body ? body : "내용 없음"}
        {/* <MemoPreview initialConfig={initialConfig} /> */}
      </div>
      {showDelete && (
        <div onClick={removeMemo}>
          <Trash2 color="gray" />
        </div>
      )}
    </S.Container>
  );
};

export default Memo;

const S = {
  Container: styled.div``,
};
