import React from 'react';

import { ClipboardOutline } from 'react-ionicons';

export default function LobbyKeyCode({ gameKey, handleAlerts }) {
  const copyKeyToClipboard = e => {
    const dummyEl = document.createElement('input');
    dummyEl.value = gameKey;
    document.body.appendChild(dummyEl);
    dummyEl.select();
    document.execCommand('copy');
    handleAlerts('Copied to Clip Board');
    document.body.removeChild(dummyEl);
  };

  return (
    <div className='LobbyKeyCode lobby-card card'>
      <h3>Game Code</h3>
      <h1>{gameKey}</h1>
      <div onClick={copyKeyToClipboard}>
        <ClipboardOutline />
      </div>
      <p>Other players can use this code to join your game.</p>
    </div>
  );
}
