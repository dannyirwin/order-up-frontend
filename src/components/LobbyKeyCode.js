import React from 'react';

export default function LobbyKeyCode({ gameKey }) {
  return (
    <div className='key-code-container lobby-card card'>
      <h3>Game Code</h3>
      <h1>{gameKey}</h1>
      <p>Other players can use this code to join your game.</p>
    </div>
  );
}
