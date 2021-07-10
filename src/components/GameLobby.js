import React from 'react';
import { updateDB } from '../utilities/fetchUtilities';

export default function GameLobby({ gameId, gameKey }) {
  const startGame = () => {
    console.log(gameId);
    const body = {
      method: 'start_game'
    };
    updateDB(body, gameId);
  };

  return (
    <div>
      <div>
        <h3 className='key-code'>Game Code</h3>
        <h1>{gameKey}</h1>
        <p>Other players can use this code to join your game.</p>
        <p>Press "Start Game" when you are all ready.</p>
      </div>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}
