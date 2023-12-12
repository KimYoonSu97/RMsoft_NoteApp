import { atom } from "jotai";

export interface MemoType {
  description: string;
  date: string;
  id: string;
}

export const NotebookListAtom = atom<boolean>(false);

export const MemoListAtom = atom<MemoType[]>([]);
