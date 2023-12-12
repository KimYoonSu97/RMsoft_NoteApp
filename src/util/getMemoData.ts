export const getMemoData = (memoId: string) => {
  console.log(memoId);
  if (memoId) {
    const memo = localStorage.getItem(memoId);

    const parseMemo = JSON.parse(memo!).editorState;
    return JSON.stringify(parseMemo);
  }
};
