/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Guest from './Guest.js';

const loadingStyle = css`
  margin: 4px 8px;
  text-align: center;
`;

function GuestList(props) {
  async function fetchGuestList() {}

  useEffect(() => {
    async function fullFetch() {
      await fetchGuestList();
    }
    fullFetch().catch((err) => {
      console.log(err);
    });
  }, []);

  // console.log(props.guestsList);

  if (props.guestsList.length < 1) {
    return <h1 css={loadingStyle}>Loading...</h1>;
  } else {
    props.guestsList.forEach(() => {});
  }
  return (
    <ul>
      {props.guestsList.map((singleGuest) => {
        return (
          <Guest
            key={String(singleGuest.id)}
            id={singleGuest.id}
            firstName={singleGuest.firstName}
            lastName={singleGuest.lastName}
            attending={singleGuest.attending}
            guestsList={props.guestsList}
            setGuestsList={props.setGuestsList}
          />
        );
      })}
    </ul>
  );
}

export default GuestList;

GuestList.propTypes = {
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
