/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

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

function Guest(props) {
  const [attend, setAttend] = useState(props.attending);

  function changeAttending() {
    const tempGuestList = [...props.guestsList];
    tempGuestList[props.id].attending = !attend;
    props.setGuestsList(tempGuestList);
    setAttend(!attend);
    console.log(props.guestsList);
  }

  function deleteGuest() {
    const tempGuestList = [...props.guestsList];
    tempGuestList.splice(props.id, 1);
    tempGuestList.forEach((object, index) => {
      object.id = index;
    });
    props.setGuestsList(tempGuestList);
    console.log(props.guestsList);
  }
  // console.log(props);
  return (
    <li>
      <div data-test-id="guest" css={listOfGuestsSingleGuest}>
        <div css={listOfGuestsSingleGuestNames}>
          <div css={listOfGuestsSingleGuestName}>{props.firstName}</div>
          <div css={listOfGuestsSingleGuestName}>{props.lastName}</div>
        </div>
        <label>
          attending
          <input type="checkbox" checked={attend} onChange={changeAttending} />
        </label>
        <button onClick={deleteGuest}>Remove</button>
      </div>
    </li>
  );
}

export default Guest;

Guest.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  attending: PropTypes.bool.isRequired,
  guestsList: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      attending: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  setGuestsList: PropTypes.func,
};
