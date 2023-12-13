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
  createEditor,
} from "lexical";
import { debounce, set, throttle } from "lodash";
import { useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { MemoListAtom } from "../../store/state";

interface BasicEditorProps {
  // initialConfig: InitialConfigType;
  serializedEditorState: string;
  memoId: string;
}

const BasicEditor = ({ serializedEditorState, memoId }: BasicEditorProps) => {
  const location = useLocation();
  const [memoList, setMemoList] = useAtom(MemoListAtom);
  const editor = createEditor();

  const [editorComponent, setEditorComponent] = useState<JSX.Element>(<></>);
  const [initialConfig, setInitialConfig] = useState<InitialConfigType>({
    namespace: "MyEditor",
    onError: (error: Error) => {
      console.error(error);
    },
    editorState: editor.parseEditorState(serializedEditorState),
  });

  useEffect(() => {
    console.log(serializedEditorState);
    console.log(memoId);
    const newConfig = {
      namespace: "MyEditor",
      onError: (error: Error) => {
        console.error(error);
      },
      editorState: editor.parseEditorState(serializedEditorState),
    };
    setInitialConfig(newConfig);

    const newEditor = () => {
      return (
        <LexicalComposer initialConfig={newConfig} key={memoId}>
          <S.EditContainer>
            <RichTextPlugin
              contentEditable={<S.Editor />}
              placeholder={
                <S.PlaceHolder>새로운 노트를 작성하세요.</S.PlaceHolder>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <OnChangePlugin onChange={onChange} />
          </S.EditContainer>
        </LexicalComposer>
      );
    };
    setEditorComponent(newEditor());
  }, [serializedEditorState, memoId]);

  const [editorState, setEditorState] =
    useState<SerializedEditorState<SerializedLexicalNode>>();

  const onChange = ({ editorState }: { editorState: EditorState }): void => {
    const editorStateJSON = editorState.toJSON();
    setEditorState(editorStateJSON);
    saveMemo(editorState);
  };

  const saveMemo = useCallback(
    debounce(async (params: EditorState) => {
      const memoId = location.pathname.split("/")[2];
      const updateMemo = {
        editorState: params,
        date: new Date(),
        id: memoId,
      };
      localStorage.setItem(memoId, JSON.stringify(updateMemo));

      const newMemoList = memoList.map((memo) => {
        if (memo.id === memoId) {
          return updateMemo;
        }
        return memo;
      });

      setMemoList(newMemoList);
    }, 1000),
    [memoId]
  );

  return <>{editorComponent}</>;
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
