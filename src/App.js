import './App.css';

import { useEffect, useState } from 'react';
import { getGameFromDB } from './utilities/fetchUtilities';

import GameBoard from './containers/GameBoard';
import Header from './containers/Header';
import HowToPlay from './components/HowToPlay';
import Attribution from './components/Attribution';

import consumer from './cable';
import MainMenu from './containers/MainMenu';

function App() {
  const [game, setGame] = useState({});
  const [showTutorial, setShowTutorial] = useState(false);
  const [colorblindMode, setColorblindMode] = useState(false);
  const [currentPage, setCurrentPage] = useState();

  const createSubscription = gameId => {
    consumer.subscriptions.create(
      {
        channel: 'GamesChannel',
        game_id: gameId
      },
      {
        received: gameData => {
          console.log(gameData);
          setGame(gameData);
        }
      }
    );
  };

  const handleHowToPlay = () => {
    setShowTutorial(!showTutorial);
  };

  const joinGame = id => {
    getGameFromDB(id)
      .then(setGame)
      .then(() => {
        createSubscription(id);
      });
  };

  const renderColorBlindMode = () => {
    const root = document.querySelector(':root');
    if (colorblindMode) {
      root.style.setProperty('--color-2', 'rgb(0, 77, 64)');
      root.style.setProperty('--background-color-2', 'rgba(0, 77, 64, 0.3)');
    } else {
      root.style.setProperty('--color-2', 'rgb(233, 63, 111)');
      root.style.setProperty(
        '--background-color-2',
        'rgba(233, 63, 111, 0.3);'
      );
    }
  };

  const toggleColorblindMode = () => {
    setColorblindMode(!colorblindMode);
  };

  return (
    <div className='App'>
      {renderColorBlindMode()}
      {showTutorial ? (
        <div className='disabled-background'>
          <HowToPlay handleHowToPlay={handleHowToPlay} />
        </div>
      ) : null}
      <Header
        handleHowToPlay={handleHowToPlay}
        game={game}
        setGame={setGame}
        toggleColorblindMode={toggleColorblindMode}
      />
      {game?.board ? (
        <GameBoard boardCards={game.board} gameId={game.id} />
      ) : (
        <MainMenu joinGame={joinGame} />
      )}
      <div className='background-wing'></div>
      <Attribution />
    </div>
  );
}

export default App;
