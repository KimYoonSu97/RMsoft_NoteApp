import { atom } from "jotai";
import { EditorState } from "lexical";

export interface MemoType {
  editorState: string | EditorState;
  date: Date;
  id: string;
}

export interface MemoListType {
  date: Date;
  id: string;
  editorState: EditorState;
}

export const NotebookListAtom = atom<boolean>(false);

export const MemoListAtom = atom<MemoType[]>([]);
