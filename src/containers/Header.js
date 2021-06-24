import React from 'react';
import Controls from '../components/Controls';
import IconOne from '../components/IconOne';
import IconTwo from '../components/IconTwo';
import IconThree from '../components/IconThree';

export default function Header({
  handleNewGame,
  game,
  setCardsToShow,
  handleHowToPlay
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
        <div className='title-container'>
          <h1 className='title'>
            Order Up<div>!</div>
          </h1>
        </div>
        <Controls
          handleNewGame={handleNewGame}
          game={game}
          setCardsToShow={setCardsToShow}
          handleHowToPlay={handleHowToPlay}
        />
      </div>
    </header>
  );
}
