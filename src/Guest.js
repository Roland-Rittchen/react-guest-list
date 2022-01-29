/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

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

function Guest({ id, firstName, lastName, attending, baseUrl, setIsLoading }) {
  const [del, setDel] = useState(false);
  const [change, setChange] = useState(false);
  const [checkBoxAria, setCheckBoxAria] = useState(
    firstName.toLowerCase() + ' ' + lastName.toLowerCase() + ' ' + attending,
  ); // <first name> <last name> attending status

  const changeAttending = useCallback(async () => {
    if (change) {
      await fetch(`${baseUrl}/guests/` + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attending: !attending }),
      });
      // const updatedGuest = await response.json();
    }
    // const updatedGuest = await response.json();
  }, [baseUrl, change, id, attending]);

  useEffect(() => {
    if (change) {
      console.log('use effect');
      changeAttending().catch((err) => console.log(err));
      setChange(false);
      setCheckBoxAria(
        firstName.toLowerCase() +
          ' ' +
          lastName.toLowerCase() +
          ' ' +
          attending,
      );
      setTimeout(() => {
        setIsLoading(true);
      }, 500);
    }
  }, [
    changeAttending,
    attending,
    setCheckBoxAria,
    change,
    setChange,
    id,
    setIsLoading,
    firstName,
    lastName,
  ]);

  // function changeAttending() {
  //   const tempGuestList = [...guestsList];
  //   tempGuestList[id].attending = !attend;
  //   setGuestsList(tempGuestList);
  //   setAttend(!attend);
  //   setCheckBoxAria(
  //     firstName.toLowerCase() + ' ' + lastName.toLowerCase() + ' ' + attend,
  //   );
  //   // console.log(props.guestsList);
  // }

  // Deleting a guest (aka DELETE /guests/:id)
  const deleteGuest = useCallback(async () => {
    if (!del) {
      return;
    }
    await fetch(`${baseUrl}/guests/` + id, {
      method: 'DELETE',
    });
  }, [baseUrl, id, del]);

  useEffect(() => {
    if (del) {
      deleteGuest().catch((err) => console.log(err));
      setDel(false);
      setTimeout(() => {
        setIsLoading(true);
      }, 500);
    }
  }, [deleteGuest, del, setDel, id, setIsLoading]);

  return (
    <li>
      <div data-test-id="guest" css={listOfGuestsSingleGuest}>
        <div css={listOfGuestsSingleGuestNames}>
          <div css={listOfGuestsSingleGuestName}>{firstName}</div>
          <div css={listOfGuestsSingleGuestName}>{lastName}</div>
        </div>
        <label>
          attending
          <input
            aria-label={checkBoxAria}
            type="checkbox"
            checked={attending}
            onChange={() => setChange(true)}
          />
        </label>
        <button onClick={() => setDel(true)}>Remove</button>
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
};
