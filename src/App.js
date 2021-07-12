import './App.css';

import { useEffect, useState } from 'react';
import { getGameFromDB } from './utilities/fetchUtilities';

import GameBoard from './containers/GameBoard';
import Header from './containers/Header';
import Attribution from './components/Attribution';
import MainMenu from './containers/MainMenu';
import AlertBar from './components/AlertBar';
import HowToPlay from './components/HowToPlay';

import consumer from './cable';

function App() {
  const [game, setGame] = useState({});
  const [showTutorial, setShowTutorial] = useState(false);
  const [colorblindMode, setColorblindMode] = useState(false);
  const [message, setMessage] = useState();

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
      {showTutorial ? <HowToPlay handleHowToPlay={handleHowToPlay} /> : null}
      <Header
        handleHowToPlay={handleHowToPlay}
        game={game}
        setGame={setGame}
        toggleColorblindMode={toggleColorblindMode}
      />
      <AlertBar />
      {game?.board ? (
        <GameBoard game={game} />
      ) : (
        <MainMenu joinGame={joinGame} handleHowToPlay={handleHowToPlay} />
      )}
      <div className='background-wing'></div>
      <Attribution />
    </div>
  );
}

export default App;
