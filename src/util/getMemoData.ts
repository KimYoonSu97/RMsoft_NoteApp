export const getMemoData = (memoId: string) => {
  const memo = localStorage.getItem(memoId);

  const parseMemo = JSON.parse(memo!).editorState;
  return JSON.stringify(parseMemo);
};
