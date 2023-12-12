import { atom } from "jotai";

export interface MemoType {
  description: string;
  date: string;
}

export const NotebookListAtom = atom<boolean>(false);

export const MemoListAtom = atom<MemoType[]>([]);
