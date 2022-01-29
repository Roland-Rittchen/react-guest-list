/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import AddGuest from './AddGuest.js';
import GuestList from './GuestList.js';

const baseUrl = 'http://localhost:4000';

const header = css`
  background-color: rgba(40, 41, 54, 1);
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;
  text-align: center;
  h1 {
    font-size: 50px;
  }
`;

const appOutline = css`
  background-color: rgba(40, 41, 54, 1);
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;
`;

const listOfGuests = css`
  margin: 10px 0px;
`;

const inputSection = css`
  padding: 20px;
  margin: 45px 0px;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [guestsList, setGuestsList] = useState([]);

  return (
    <div className="App">
      <header className="App-header" css={header}>
        <h1>React Guest List</h1>
      </header>
      <div css={appOutline}>
        <GuestList
          css={listOfGuests}
          guestsList={guestsList}
          setGuestsList={setGuestsList}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          baseUrl={baseUrl}
        />
        <div css={inputSection}>
          <AddGuest
            guestsList={guestsList}
            setGuestsList={setGuestsList}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            baseUrl={baseUrl}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
