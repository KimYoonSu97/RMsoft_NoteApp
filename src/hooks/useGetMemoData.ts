import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export const useGetMemoData = (memoId: string) => {
  const [editorState, setEditorState] = useState<string>();

  useEffect(() => {
    const memo = localStorage.getItem(memoId);
    if (memo) {
      const parseMemo = JSON.parse(memo);
      setEditorState(parseMemo.description);
    }
    // editorState: parseMemo.description,

    // setConfig(initialConfig);
  }, []);

  return editorState;
};
