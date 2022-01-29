/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
// import { useEffect } from 'react';
import Guest from './Guest.js';

const loadingStyle = css`
  margin: 4px 8px;
  text-align: center;
`;

function GuestList({
  guestsList,
  setGuestsList,
  setIsLoading,
  isLoading,
  baseUrl,
}) {
  // Getting all guests (aka GET /guests)
  const fetchGuests = useCallback(async () => {
    if (isLoading) {
      const response = await fetch(`${baseUrl}/guests`);
      const allGuests = await response.json();
      setGuestsList(allGuests);
      setIsLoading(false);
    }
  }, [baseUrl, setGuestsList, setIsLoading, isLoading]);

  useEffect(() => {
    if (isLoading) {
      fetchGuests().catch((err) => console.log(err));
    }
  }, [fetchGuests, setIsLoading, isLoading]);

  if (isLoading) {
    return <h1 css={loadingStyle}>Loading...</h1>;
  } else {
    guestsList.forEach(() => {});
  }
  return (
    <ul>
      {guestsList.map((singleGuest) => {
        return (
          <Guest
            key={String(
              singleGuest.id + singleGuest.firstName + singleGuest.lastName,
            )}
            id={singleGuest.id}
            firstName={singleGuest.firstName}
            lastName={singleGuest.lastName}
            attending={singleGuest.attending}
            baseUrl={baseUrl}
            setIsLoading={setIsLoading}
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
      id: PropTypes.string.isRequired,
    }),
  ),
  setGuestsList: PropTypes.func,
  setIsLoading: PropTypes.func,
  isLoading: PropTypes.bool,
  baseUrl: PropTypes.string,
};
