import React, { useCallback, useEffect, useState } from "react";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import OnChangePlugin from "./OnChangePlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import styled from "styled-components";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import {
  EditorState,
  SerializedEditorState,
  SerializedLexicalNode,
} from "lexical";
import { throttle } from "lodash";
import { useLocation } from "react-router-dom";

interface BasicEditorProps {
  initialConfig: InitialConfigType;
}

const BasicEditor = ({ initialConfig }: BasicEditorProps) => {
  const location = useLocation();
  const [editorState, setEditorState] =
    useState<SerializedEditorState<SerializedLexicalNode>>();

  const onChange = ({ editorState }: { editorState: EditorState }): void => {
    const editorStateJSON = editorState.toJSON();
    setEditorState(editorStateJSON);
    saveMemo(editorState);
  };

  const saveMemo = useCallback(
    throttle(async (params: EditorState) => {
      const { search } = location;
      const memoId = search.split("=")[1];
      const updateMemo = {
        editorState: params,
        date: new Date(),
        id: memoId,
      };
      localStorage.setItem(memoId, JSON.stringify(updateMemo));
    }, 3000),
    []
  );

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <S.EditContainer>
        <RichTextPlugin
          contentEditable={<S.Editor />}
          placeholder={<S.PlaceHolder>새로운 노트를 작성하세요.</S.PlaceHolder>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={onChange} />
      </S.EditContainer>
    </LexicalComposer>
  );
};

export default BasicEditor;

const S = {
  Editor: styled(ContentEditable)`
    /* width: 100%; */
    height: 100%;
    outline: none;
    padding: 50px;
    color: white;
    border: 1px solid black;
    border: none;

    &:focus {
      border: none;
      outline: none;
    }

    p:first-child {
      font-size: 30px;
      font-weight: bold;
    }
  `,
  EditContainer: styled.div`
    position: relative;
  `,
  PlaceHolder: styled.div`
    position: absolute;
    pointer-events: none;
    top: 50px;
    left: 50px;
  `,
};
