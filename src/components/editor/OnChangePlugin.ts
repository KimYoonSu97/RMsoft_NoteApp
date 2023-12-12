import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { EditorState } from "lexical";
import { useEffect } from "react";

const OnChangePlugin = ({
  onChange,
}: {
  onChange: ({ editorState }: { editorState: EditorState }) => void;
}) => {
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
};

export default OnChangePlugin;
