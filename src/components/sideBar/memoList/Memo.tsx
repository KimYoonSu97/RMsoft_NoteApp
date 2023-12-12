import React, { useState } from "react";
import { MemoType } from "../../../store/state";
import styled from "styled-components";
import { Trash2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

interface MemoProps {
  memo: MemoType;
  setMemoList: React.Dispatch<React.SetStateAction<MemoType[]>>;
}

const Memo = ({ memo, setMemoList }: MemoProps) => {
  const [showDelete, setShowDelete] = useState(false);
  const param = useParams();
  const navigate = useNavigate();

  const onMouseOver = () => {
    setShowDelete(true);
  };
  const onMouseLeave = () => {
    setShowDelete(false);
  };

  const removeMemo = () => {
    console.log("삭제버튼클릭");

    if (window.confirm("메모를 삭제하시겠습니까?")) {
      localStorage.removeItem(memo.id);
      setMemoList((prev) => prev.filter((item) => item.id !== memo.id));
      navigate(`/${param.notebookId}`);
    } else {
      return;
    }
  };

  return (
    <S.Container onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {memo.date}
      {showDelete && (
        <div onClick={removeMemo}>
          <Trash2 color="gray" />
        </div>
      )}
    </S.Container>
  );
};

export default Memo;

const S = {
  Container: styled.div``,
};
