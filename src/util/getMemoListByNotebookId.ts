import { MemoType } from "../store/state";

export const getMemoListByNotebookId = (
  notebookId: string
): MemoType[] | null => {
  const filtredMemoList = Object.keys(localStorage).filter(
    (item) => item.includes(notebookId) && item !== notebookId
  );

  if (filtredMemoList.length === 0) return null;

  console.log(filtredMemoList);
  const memoList = filtredMemoList.map((item) => {
    const memo = localStorage.getItem(item);
    const memoObj = JSON.parse(memo!);
    return memoObj;
  });

  return memoList;
};
