import React from "react";
import styled from "styled-components";

import Header from "../common/components/Header";
import MemoPage from "../common/pages/Memo/MemoPage";

const AppContainer = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 30px;
`

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <MemoPage />
      </AppContainer>
    </>
  );
}

export default App;
