import React from "react";
import styled from "styled-components";

const MemoBar = () => {
  return <S.Container>MemoBar</S.Container>;
};

export default MemoBar;

const S = {
  Container: styled.div`
    background-color: orange;
    max-width: 200px;
    width: 100%;
  `,
};
