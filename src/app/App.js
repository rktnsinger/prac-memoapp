import React from "react";
import styled from "styled-components";

import Memo from "../common/pages/Memo/Memo";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`

function App() {
  return (
    <AppContainer>
      <Memo />
    </AppContainer>
  );
}

export default App;
