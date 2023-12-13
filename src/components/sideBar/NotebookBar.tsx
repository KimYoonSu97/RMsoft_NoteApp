import styled from "styled-components";
import NotebookList from "./notebookList/NotebookList";

const NotebookBar = () => {
  return (
    <S.Container>
      <NotebookList />
    </S.Container>
  );
};

export default NotebookBar;

const S = {
  Container: styled.div`
    border-right: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
    max-width: 200px;
    width: 100%;
    height: 100%;
  `,
};
