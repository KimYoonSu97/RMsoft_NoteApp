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

  const onClick = () => {
    navigate(`/${param.notebookId}/?memo=${memo.id}`);
  };

  const onMouseOver = () => {
    setShowDelete(true);
  };
  const onMouseLeave = () => {
    setShowDelete(false);
  };

  const removeMemo = () => {
    if (window.confirm("메모를 삭제하시겠습니까?")) {
      localStorage.removeItem(memo.id);
      setMemoList((prev) => prev.filter((item) => item.id !== memo.id));
      navigate(`/`);
    } else {
      return;
    }
  };

  return (
    <S.Container onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <div onClick={onClick}> {memo.date}</div>
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
