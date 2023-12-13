import { BrowserRouter } from "react-router-dom";
import Router from "./shared/Router";

const App = () => {
  return (
    // <S.Container>hello</S.Container>

    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
