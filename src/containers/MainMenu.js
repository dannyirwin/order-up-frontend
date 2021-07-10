import { useState } from 'react';
import JoinGame from './JoinGame';

export default function MainMenu({ joinGame }) {
  const [currentPage, setCurrentPage] = useState('');

  const showPage = () => {
    switch (currentPage) {
      case 'Play Online':
        return <JoinGame setCurrentPage={setCurrentPage} joinGame={joinGame} />;
      default:
        return (
          <div>
            <button onClick={() => setCurrentPage()}>Practice</button>
            <button onClick={() => setCurrentPage('Play Online')}>
              Play Online!
            </button>
            <button onClick={() => setCurrentPage()}>Leaderboards</button>
          </div>
        );
    }
  };
  return <div>{showPage()}</div>;
}
