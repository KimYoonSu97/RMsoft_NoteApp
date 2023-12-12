import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MemoListAtom, MemoType } from "../../../store/state";
import { getMemoListByNotebookId } from "../../../util/getMemoListByNotebookId";
import Memo from "./Memo";
import { useAtom } from "jotai";

const MemoList = () => {
  const param = useParams();
  const location = useLocation();
  // const [memoList, setMemoList] = useState<MemoType[]>([]);
  const [memoList, setMemoList] = useAtom(MemoListAtom);

  useEffect(() => {
    const memoList = getMemoListByNotebookId(param.notebookId!);
    console.log(memoList);
    if (!memoList) return;
    setMemoList(memoList);
  }, [location]);

  return (
    <div>
      {memoList.map((memo, index) => {
        return <Memo key={index} memo={memo} setMemoList={setMemoList} />;
      })}
    </div>
  );
};

export default MemoList;
