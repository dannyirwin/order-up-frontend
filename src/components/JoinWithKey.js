import React from 'react';

export default function JoinWithKey({ joinGame, games }) {
  const handleJoinGame = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const key = formData.get('gameKey');
    const id = games.filter(game => {
      return game.key === key;
    })[0].id;
    joinGame(id);
  };

  return (
    <form onSubmit={handleJoinGame}>
      <label htmlFor='gameKey'></label>
      <input
        name='gameKey'
        type='text'
        required
        placeholder='Four digit key'
      ></input>
      <input type='submit' value='Join With Key'></input>
    </form>
  );
}
