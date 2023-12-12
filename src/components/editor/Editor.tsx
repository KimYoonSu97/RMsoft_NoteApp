import React, { useCallback, useEffect, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { debounce, throttle } from "lodash";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { EditorState } from "lexical";

function OnChangePlugin({
  onChange,
}: {
  onChange: ({ editorState }: { editorState: EditorState }) => void;
}) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      const param = {
        editorState: editorState as EditorState,
      };
      onChange(param);
    });
  }, [editor, onChange]);
  return null;
}

const Editor = () => {
  const initialConfig = {
    namespace: "lexical-editor",
    theme: {},
    onError: (error: Error) => {
      console.error(error);
    },
  };

  const [editorState, setEditorState] = useState<string>();
  const [config, setConfig] = useState(initialConfig);

  const location = useLocation();

  useEffect(() => {
    const { search } = location;
    const memoId = search.split("=")[1];
    const memo = localStorage.getItem(memoId);
    if (memo) {
      const parseMemo = JSON.parse(memo);

      const initialConfig = {
        namespace: "lexical-editor",
        editorState: parseMemo.description,
        theme: {},
        onError: (error: Error) => {
          console.error(error);
        },
      };
      setConfig(initialConfig);
    }
  }, [location]);

  useEffect(() => {}, [config]);

  const onChange = ({ editorState }: { editorState: EditorState }): void => {
    const editorStateJSON = editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));
    saveMemo(editorState);
  };

  const saveMemo = useCallback(
    throttle(async (params: EditorState) => {
      const { search } = location;
      const memoId = search.split("=")[1];
      const updateMemo = {
        description: params,
        date: new Date(),
      };
      localStorage.setItem(memoId, JSON.stringify(updateMemo));
      console.log("saveMemo");
    }, 3000),
    []
  );

  return (
    <LexicalComposer initialConfig={config}>
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

export default Editor;

const S = {
  Editor: styled(ContentEditable)`
    width: 100%;
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
