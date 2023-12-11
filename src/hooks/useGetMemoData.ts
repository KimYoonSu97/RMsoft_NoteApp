import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export const useGetMemoData = () => {
  const [memo, setMemo] = useState<any[]>();
  const location = useLocation();
  useEffect(() => {
    const notebookId = location.search.replace("?note=notebook", "");
    const memoList = Object.keys(localStorage).filter((item) => {
      return item.includes(notebookId);
    });

    let memoData: string[] = [];
    console.log(memoData);
    if (memoList.length === 0) {
      setMemo([]);
      return;
    } else {
      memoList.forEach((item: string) => {
        const memoItem = JSON.parse(localStorage.getItem(item) || "") as string;
        return memoData.push(memoItem);
      });
    }
    console.log(memoData);
  }, [location]);

  return memo;
};
