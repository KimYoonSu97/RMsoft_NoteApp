export const getMemoData = (memoId: string) => {
  const memo = localStorage.getItem(memoId);

  if (memo) {
    const parseMemo = JSON.parse(memo).description;
    return parseMemo;
  }
  return null;
};
