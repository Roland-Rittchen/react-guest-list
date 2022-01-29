import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

function AddGuest({
  guestsList,
  setGuestsList,
  isLoading,
  setIsLoading,
  baseUrl,
}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [create, setCreate] = useState(false);

  // Creating a new guest (aka POST /guests)
  const createGuest = useCallback(async () => {
    if (!create) {
      return;
    }
    console.log('use callback');
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    });
    const createdGuest = await response.json();
    console.log(createdGuest);
  }, [baseUrl, firstName, lastName, create]);

  useEffect(() => {
    if (create) {
      console.log('use effect');
      // await createGuest();
      createGuest().catch((err) => console.log(err));
      setCreate(false);

      setFirstName('');
      setLastName('');
      setTimeout(() => {
        setIsLoading(true);
      }, 500);
    }
  }, [
    createGuest,
    create,
    setCreate,
    firstName,
    lastName,
    guestsList,
    setGuestsList,
    setIsLoading,
  ]);

  const handleKeyDownFirstName = (event) => {
    if (event.key === 'Enter') {
      const nextSibling = document.querySelector(`input[name=lastNameInput]`);
      nextSibling.focus();
    }
  };
  const handleKeyDownLastName = (event) => {
    if (event.key === 'Enter') {
      setCreate(true);
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
      {/*
      <button
        onClick={() => setCreate(true)}
        disabled={isLoading ? 'disabled' : ''}
      >
        Add guest
      </button> */}
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
  setIsLoading: PropTypes.func,
  baseUrl: PropTypes.string,
};
