import React from 'react';
import Controls from '../components/Controls';
import IconOne from '../components/IconOne';
import IconTwo from '../components/IconTwo';
import IconThree from '../components/IconThree';
import EmployeeInfo from './EmployeeInfo';

export default function Header({
  game,
  handleHowToPlay,
  setGame,
  toggleColorblindMode,
  updateDB
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
          updateDB={updateDB}
        />
      </div>
    </header>
  );
}
