import React from 'react';
import UserIcon from './UserIcon';

export default function LobbyGameInfo({ startGame, players }) {
  const showPlayers = () => {
    return players.map(user => {
      return <UserIcon user={user} />;
    });
  };
  return (
    <div className='LobbyGameInfo lobby-card card'>
      <h3>Current Players</h3>
      <div className='players-display'>{showPlayers()}</div>
      <p>Once everybody has joined, press "Start Game" to begin!</p>
      <button onClick={startGame}>Star Game</button>
    </div>
  );
}
