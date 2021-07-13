import { useState } from 'react';
import JoinGame from './JoinGame';
import MainCardHowToPlay from './MainCardHowToPlay';
import MainCardPlayOnline from './MainCardPlayOnline';
import MainCardPractice from './MainCardPractice';
import PracticeGame from './PracticeGame';

export default function MainMenu({
  joinGame,
  handleHowToPlay,
  handleAlerts,
  togglePracticeMode
}) {
  const [currentPage, setCurrentPage] = useState('');

  const showPage = () => {
    switch (currentPage) {
      case 'Practice':
        return <PracticeGame setCurrentPage={setCurrentPage} />;
      case 'Play Online':
        return (
          <JoinGame
            setCurrentPage={setCurrentPage}
            joinGame={joinGame}
            handleAlerts={handleAlerts}
          />
        );
      default:
        return (
          <div className='MainMenu'>
            <MainCardHowToPlay handleHowToPlay={handleHowToPlay} />
            <MainCardPractice togglePracticeMode={togglePracticeMode} />
            <MainCardPlayOnline setCurrentPage={setCurrentPage} />
          </div>
        );
    }
  };
  return <div>{showPage()}</div>;
}
