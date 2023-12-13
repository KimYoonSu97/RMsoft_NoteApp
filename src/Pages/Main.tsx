import styled from "styled-components";
import ContentBox from "../components/contentBox/ContentBox";
import MemoBar from "../components/sideBar/MemoBar";
import NotebookBar from "../components/sideBar/NotebookBar";

const Main = () => {
  return (
    <S.Container>
      <S.Inner>
        <NotebookBar />
        <MemoBar />
        <ContentBox />
      </S.Inner>
    </S.Container>
  );
};

export default Main;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  Inner: styled.div`
    min-width: 1400px;
    max-width: 1920px;
    width: 100vw;
    position: relative;
    height: 100vh;
    display: flex;
  `,
  ContentWrapper: styled.div`
    position: absolute;
    top: 0;
    left: 200px;
    width: 100%;
  `,
};
