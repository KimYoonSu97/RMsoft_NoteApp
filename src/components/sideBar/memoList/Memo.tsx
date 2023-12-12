import React from "react";
import { MemoType } from "../../../store/state";

interface MemoProps {
  memo: MemoType;
}

const Memo = ({ memo }: MemoProps) => {
  return <div>{memo.description}</div>;
};

export default Memo;
