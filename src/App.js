/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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

const listOfGuestsSingleGuest = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const listOfGuestsSingleGuestNames = css`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const listOfGuestsSingleGuestName = css`
  margin: 10px;
  font-weight: 700;
`;

const inputSection = css`
  padding: 20px;
  margin: 45px 0px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <div css={appOutline}>
        <div css={listOfGuests}>
          <ul>
            <li>
              <div data-test-id="guest" css={listOfGuestsSingleGuest}>
                <div css={listOfGuestsSingleGuestNames}>
                  <div css={listOfGuestsSingleGuestName}>FirstName</div>
                  <div css={listOfGuestsSingleGuestName}>LastName</div>
                </div>
                <label>
                  attending
                  <input type="checkbox" />
                </label>
                <button>Remove</button>
              </div>
            </li>
            <li>
              <div data-test-id="guest" css={listOfGuestsSingleGuest}>
                <div css={listOfGuestsSingleGuestNames}>
                  <div css={listOfGuestsSingleGuestName}>FirstName</div>
                  <div css={listOfGuestsSingleGuestName}>LastName</div>
                </div>
                <label>
                  attending
                  <input type="checkbox" />
                </label>
                <button>Remove</button>
              </div>
            </li>
            <li>
              <div data-test-id="guest" css={listOfGuestsSingleGuest}>
                <div css={listOfGuestsSingleGuestNames}>
                  <div css={listOfGuestsSingleGuestName}>FirstName</div>
                  <div css={listOfGuestsSingleGuestName}>LastName</div>
                </div>
                <label>
                  attending
                  <input type="checkbox" />
                </label>
                <button>Remove</button>
              </div>
            </li>
            <li>
              <div data-test-id="guest" css={listOfGuestsSingleGuest}>
                <div css={listOfGuestsSingleGuestNames}>
                  <div css={listOfGuestsSingleGuestName}>FirstName</div>
                  <div css={listOfGuestsSingleGuestName}>LastName</div>
                </div>
                <label>
                  attending
                  <input type="checkbox" />
                </label>
                <button>Remove</button>
              </div>
            </li>
          </ul>
        </div>
        <div css={inputSection}>
          <div>
            <label>
              First name
              <input />
            </label>
            <label>
              Last name
              <input />
            </label>
            <button>Add guest</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
