import { useState } from 'react';
import JoinGame from './JoinGame';
import MainCardHowToPlay from './MainCardHowToPlay';
import MainCardPlayOnline from './MainCardPlayOnline';
import MainCardPractice from './MainCardPractice';

export default function MainMenu({ joinGame, handleHowToPlay, setAlert }) {
  const [currentPage, setCurrentPage] = useState('');

  const showPage = () => {
    switch (currentPage) {
      case 'Play Online':
        return (
          <JoinGame
            setCurrentPage={setCurrentPage}
            joinGame={joinGame}
            setAlert={setAlert}
          />
        );
      default:
        return (
          <div className='MainMenu'>
            <MainCardHowToPlay handleHowToPlay={handleHowToPlay} />
            <MainCardPractice setCurrentPage={setCurrentPage} />
            <MainCardPlayOnline setCurrentPage={setCurrentPage} />
          </div>
        );
    }
  };
  return <div>{showPage()}</div>;
}
