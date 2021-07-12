import React from 'react';
import Controls from '../components/Controls';
import IconOne from '../components/Icons/IconOne';
import IconTwo from '../components/Icons/IconTwo';
import IconThree from '../components/Icons/IconThree';

export default function Header({
  game,
  handleHowToPlay,
  setGame,
  toggleColorblindMode
}) {
  return (
    <header className='Header'>
      <div className='header-background'>
        <IconOne />
        <IconTwo />
        <IconThree />
        <IconOne />
        <IconTwo />
        <IconThree />
        <IconOne />
        <IconTwo />
        <IconThree />
        <IconOne />
        <IconTwo />
        <IconThree />
        <IconOne />
        <IconTwo />
        <IconThree />
        <IconOne />
        <IconTwo />
        <IconThree />
        <IconOne />
        <IconTwo />
        <IconThree />
        <IconOne />
        <IconTwo />
        <IconThree />
      </div>
      <div className='header-content'>
        {/* <EmployeeInfo points={points} /> */}
        <div className='title-container'>
          <h1 className='title'>Order Up!</h1>
        </div>
        <button onClick={handleHowToPlay}>How Do I Play?</button>
        <Controls
          setGame={setGame}
          game={game}
          handleHowToPlay={handleHowToPlay}
          toggleColorblindMode={toggleColorblindMode}
        />
      </div>
    </header>
  );
}
