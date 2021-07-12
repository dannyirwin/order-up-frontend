import { ChevronUpOutline } from 'react-ionicons';

export default function PickUsername({
  setUserAttribute,
  user,
  addUserToGame,
  gameState
}) {
  const addUsername = e => {
    e.preventDefault();
    const username = e.target.value;
    setUserAttribute('username', username);
  };

  return (
    <form className='PickUsername'>
      <label htmlFor='username'>Pick a Username: </label>
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
          value={
            gameState === 'Game in progress'
              ? 'Save Avatar and Start Game'
              : 'Save Avatar'
          }
        ></input>
      ) : (
        <button disabled>Enter a username to continue</button>
      )}
    </form>
  );
}
