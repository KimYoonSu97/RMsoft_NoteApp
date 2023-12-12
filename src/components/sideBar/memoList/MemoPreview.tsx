import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

interface BasicEditorProps {
  initialConfig: InitialConfigType;
}

const MemoPreview = ({ initialConfig }: BasicEditorProps) => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>새로운 노트를 작성하세요.</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
    </LexicalComposer>
  );
};

export default MemoPreview;
