import React from 'react';

export default function MainCardHowToPlay({ handleHowToPlay }) {
  return (
    <div className='menu-card card'>
      <button onClick={handleHowToPlay}>Learn How to Play</button>
      <hr></hr>
      <p>
        View the rules and check out some examples. You're also able to view the
        rules while you play in case you need a refresher!
      </p>
    </div>
  );
}
