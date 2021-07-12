import React from 'react';

export default function PickUsername({
  setUserAttribute,
  user,
  addUserToGame
}) {
  const addUsername = e => {
    e.preventDefault();
    const username = e.target.value;
    setUserAttribute('username', username);
  };

  return (
    <form>
      <input
        type='text'
        placeholder='What should we call you?'
        maxLength='40'
        required
        onChange={addUsername}
      ></input>
      {user?.username ? (
        <input
          type='submit'
          onClick={addUserToGame}
          value='Save Avatar and Join Game'
        ></input>
      ) : (
        <button disabled>Enter a username to Join Game</button>
      )}
    </form>
  );
}
