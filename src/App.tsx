import { BrowserRouter } from "react-router-dom";
import Router from "./shared/Router";
import styled from "styled-components";

const App = () => {
  return (
    // <S.Container>hello</S.Container>

    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;

const S = {
  Container: styled.div`
    display: flex;
  `,
};
