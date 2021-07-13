import React from 'react';

export default function MainCardPlayOnline({ setCurrentPage }) {
  return (
    <div className='menu-card card'>
      <button onClick={() => setCurrentPage('Play Online')}>
        Play Online!
      </button>
      <hr></hr>
      <p>
        Play a game with friends and make some new ones by joining public games.
        Did somebody send you a Game Key? Use it here! Or just host your own
        game!
      </p>
    </div>
  );
}
