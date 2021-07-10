import React from 'react';
import { updateDB } from '../utilities/fetchUtilities';

export default function GameLobby({ gameId }) {
  const startGame = () => {
    console.log(gameId);
    const body = {
      method: 'start_game'
    };
    updateDB(body, gameId);
  };

  return (
    <div>
      Game Lobby
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}
