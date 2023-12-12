import React, { useCallback, useEffect, useState } from "react";
import { InitialConfigType } from "@lexical/react/LexicalComposer";
import { throttle } from "lodash";
import { useLocation } from "react-router-dom";
import { EditorState, createEditor } from "lexical";
import { getMemoData } from "../../util/getMemoData";
import BasicEditor from "./BasicEditor";

const Editor = () => {
  const location = useLocation();
  const [serializedEditorState, setSerializedEditorState] =
    useState<string>("");
  const editor = createEditor();

  useEffect(() => {
    const newEditorState = getMemoData(location.search.split("=")[1]);

    setSerializedEditorState(newEditorState);
  }, [location]);

  if (!serializedEditorState) return <div>loading...</div>;
  const initialConfig = {
    namespace: "MyEditor",
    onError: (error: Error) => {
      console.error(error);
    },
    editorState: editor.parseEditorState(serializedEditorState),
  };

  return (
    <div>
      <BasicEditor initialConfig={initialConfig} />
    </div>
  );
};

export default Editor;
