import PropTypes from 'prop-types';
import { useState } from 'react';

function AddGuest({ guestsList, setGuestsList, isLoading, baseUrl }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [create, setCreate] = useState(false);

  async function create() {
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    });
    const createdGuest = await response.json();
    setFirstName('');
    setLastName('');
    console.log(guestsList);
    console.log(createdGuest);
    setGuestsList([...guestsList, createdGuest]);
  }

  const handleKeyDownFirstName = (event) => {
    if (event.key === 'Enter') {
      const nextSibling = document.querySelector(`input[name=lastNameInput]`);
      nextSibling.focus();
    }
  };
  const handleKeyDownLastName = (event) => {
    if (event.key === 'Enter') {
      create().catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <label>
        First name
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
          onKeyDown={handleKeyDownFirstName}
          disabled={isLoading ? 'disabled' : ''}
        />
      </label>
      <label>
        Last name
        <input
          name="lastNameInput"
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
          onKeyDown={handleKeyDownLastName}
          disabled={isLoading ? 'disabled' : ''}
        />
      </label>
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
      id: PropTypes.string.isRequired,
    }),
  ),
  setGuestsList: PropTypes.func,
  isLoading: PropTypes.bool,
  baseUrl: PropTypes.string,
};
