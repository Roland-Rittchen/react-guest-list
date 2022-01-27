import PropTypes from 'prop-types';
import { useState } from 'react';

function AddGuest(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function addGuest() {
    const tempList = [...props.guestsList];
    tempList.push({
      firstName: firstName,
      lastName: lastName,
      attending: true,
      id: props.guestsList.length,
    });
    props.setGuestsList(tempList);
    setFirstName('');
    setLastName('');
  }

  return (
    <div>
      <label>
        First name
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
      </label>
      <label>
        Last name
        <input
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
      </label>
      <button onClick={addGuest}>Add guest</button>
    </div>
  );
}

export default AddGuest;

AddGuest.propTypes = {
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
