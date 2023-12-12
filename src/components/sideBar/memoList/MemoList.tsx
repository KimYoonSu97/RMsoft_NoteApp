import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MemoType } from "../../../store/state";
import { getMemoListByNotebookId } from "../../../util/getMemoListByNotebookId";
import Memo from "./Memo";

const MemoList = () => {
  const param = useParams();
  const location = useLocation();
  const [memoList, setMemoList] = useState<MemoType[]>([]);

  useEffect(() => {
    const memoList = getMemoListByNotebookId(param.notebookId!);

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
