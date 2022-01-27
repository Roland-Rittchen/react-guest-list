/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import AddGuest from './AddGuest.js';
import GuestList from './GuestList.js';

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
  const [isLoading, setIsloading] = useState(true);
  const [guestsList, setGuestsList] = useState([
    {
      firstName: 'Aaron',
      lastName: 'Aaronson',
      attending: false,
      id: 0,
    },
    {
      firstName: 'Boris',
      lastName: 'Borisov',
      attending: true,
      id: 1,
    },
    {
      firstName: 'Caesar',
      lastName: 'Calvin',
      attending: false,
      id: 2,
    },
    {
      firstName: 'Doris',
      lastName: 'Deringer',
      attending: true,
      id: 3,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header" css={header}>
        <h1>Basic White Bitch Guest List</h1>
      </header>
      <div css={appOutline}>
        <GuestList
          css={listOfGuests}
          guestsList={guestsList}
          setGuestsList={setGuestsList}
          setIsLoading={setIsloading}
        />
        <div css={inputSection}>
          <AddGuest
            guestsList={guestsList}
            setGuestsList={setGuestsList}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
