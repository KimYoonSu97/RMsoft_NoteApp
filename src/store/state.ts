import { atom } from "jotai";
import { EditorState } from "lexical";

export interface MemoType {
  editorState: string | EditorState;
  date: Date;
  id: string;
}

export const NotebookListAtom = atom<boolean>(false);

export const MemoListAtom = atom<MemoType[]>([]);
