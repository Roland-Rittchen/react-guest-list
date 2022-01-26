/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const appOutline = css`
  background-color: rgba(40, 41, 54, 1);
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <div css={appOutline}>Guest List</div>
    </div>
  );
}

export default App;
