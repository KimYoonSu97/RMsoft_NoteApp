import { useAtom } from "jotai";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { MemoListAtom } from "../store/state";

export const useGetMemoExist = () => {
  const [memoExist, setMemoExist] = useState(false);
  const location = useLocation();
  const [memo, setMemo] = useAtom(MemoListAtom);
  useEffect(() => {
    if (location.search === "") {
      setMemoExist(false);
      return;
    }
    console.log(location.search);

    const notebookId = location.search.replace("?note=notebook", "");

    const memoList = Object.keys(localStorage).filter((item) => {
      return item.includes(notebookId);
    });

    const isMemoExist = localStorage.getItem(memoList[0]);
    console.log(isMemoExist);
    if (isMemoExist === null) {
      setMemoExist(false);
      return;
    }

    setMemoExist(true);
  }, [location, memo]);

  const exist = useMemo(() => memoExist, [location]);

  return exist;
};
