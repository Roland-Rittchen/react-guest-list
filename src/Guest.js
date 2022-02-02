/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const listOfGuestsSingleGuest = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const listOfGuestsSingleGuestName = css`
  margin: 10px;
  font-weight: 700;
`;

function Guest({
  id,
  firstName,
  lastName,
  attending,
  baseUrl,
  guestsList,
  setGuestsList,
}) {
  const [checkBoxAria, setCheckBoxAria] = useState(
    firstName.toLowerCase() +
      ' ' +
      lastName.toLowerCase() +
      ' attending ' +
      attending,
  ); // <first name> <last name> attending status

  // Changing a guest (aka PUT /guests/:id)
  async function changeAttendance() {
    await fetch(`${baseUrl}/guests/` + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: !attending }),
    });
    const tmpGuestsList = [...guestsList];
    for (let i = 0; i < tmpGuestsList.length; i++) {
      // change the local guestlist
      if (tmpGuestsList[i]['id'] === id) {
        tmpGuestsList[i]['attending'] = !attending;
      }
    }
    setCheckBoxAria(
      // change the aria label of the checkbox
      firstName.toLowerCase() +
        ' ' +
        lastName.toLowerCase() +
        ' attending ' +
        !attending,
    );
    setGuestsList(tmpGuestsList);
  }

  // Deleting a guest (aka DELETE /guests/:id)
  async function deleteGuest() {
    await fetch(`${baseUrl}/guests/` + id, {
      method: 'DELETE',
    });
    const tmpGuestsList = guestsList.filter((guest) => guest.id !== id);
    setGuestsList(tmpGuestsList);
  }

  return (
    <li>
      <div data-test-id="guest" css={listOfGuestsSingleGuest}>
        <div css={listOfGuestsSingleGuestName}>
          {firstName} {lastName}
        </div>
        <label>
          attending
          <input
            aria-label={checkBoxAria}
            type="checkbox"
            checked={attending}
            onChange={changeAttendance}
          />
        </label>
        <button onClick={deleteGuest}>Remove</button>
      </div>
    </li>
  );
}

export default Guest;

Guest.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  attending: PropTypes.bool.isRequired,
  baseUrl: PropTypes.string,
  guestsList: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      attending: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  setGuestsList: PropTypes.func,
};
