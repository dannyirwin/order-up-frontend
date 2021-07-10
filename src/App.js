import './App.css';

import { useEffect, useState } from 'react';
import { getGameFromDB } from './utilities/fetchUtilities';

import GameBoard from './containers/GameBoard';
import Header from './containers/Header';
import HowToPlayContainer from './containers/HowToPlayContainer';
import Attribution from './components/Attribution';

import consumer from './cable';
import MainMenu from './containers/MainMenu';

function App() {
  const [game, setGame] = useState({});
  const [points, setPoints] = useState(0); //TODO: This will does not work over sockets and will break when you implement it.
  const [showTutorial, setShowTutorial] = useState(false);
  const [colorblindMode, setColorblindMode] = useState(false);
  const [currentPage, setCurrentPage] = useState();

  const gameIds = [1, 2];

  const gameId = gameIds[Math.floor(Math.random() * 2)];

  const createSubscription = () => {
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
    getGameFromDB(id).then(setGame);
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
        <HowToPlayContainer handleHowToPlay={handleHowToPlay} />
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
