import React from 'react';
import Controls from '../components/Controls';
import PracticeControls from '../components/PracticeControls';
import HeaderBackground from './HeaderBackground';

export default function Header({
  game,
  handleHowToPlay,
  setGame,
  toggleColorblindMode,
  togglePracticeMode,
  isPractice
}) {
  return (
    <header className='Header'>
      <HeaderBackground />
      <div className='header-content'>
        <div className='title-container'>
          <h1 className='title'>Order Up!</h1>
        </div>
        {isPractice ? (
          <PracticeControls
            goBack={togglePracticeMode}
            handleHowToPlay={handleHowToPlay}
          />
        ) : (
          <Controls
            setGame={setGame}
            game={game}
            handleHowToPlay={handleHowToPlay}
            toggleColorblindMode={toggleColorblindMode}
          />
        )}
      </div>
    </header>
  );
}
