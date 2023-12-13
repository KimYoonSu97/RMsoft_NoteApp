import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMemoData } from "../../util/getMemoData";
import BasicEditor from "./BasicEditor";

const Editor = () => {
  const location = useLocation();

  const [memoId, setMemoId] = useState<string>("");
  const [serializedEditorState, setSerializedEditorState] =
    useState<string>("");

  useEffect(() => {
    const memoId = location.pathname.split("/")[2];
    setMemoId(memoId);
    if (!memoId) return;
    const newEditorState = getMemoData(memoId);

    setSerializedEditorState(newEditorState!);
  }, [location.pathname]);

  if (!serializedEditorState) return <div>loading...</div>;

  return (
    <div>
      <BasicEditor
        serializedEditorState={serializedEditorState}
        memoId={memoId}
      />
    </div>
  );
};

export default Editor;
