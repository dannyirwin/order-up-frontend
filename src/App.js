import './App.css';

import { useState } from 'react';
import { getGameFromDB } from './utilities/fetchUtilities';

import GameBoard from './containers/GameBoard';
import Header from './containers/Header';
import Attribution from './components/Attribution';
import MainMenu from './containers/MainMenu';
import AlertBar from './components/AlertBar';
import HowToPlay from './components/HowToPlay';

import consumer from './cable';
import PracticeGame from './containers/PracticeGame';

function App() {
  const [game, setGame] = useState({});
  const [showTutorial, setShowTutorial] = useState(false);
  const [colorblindMode, setColorblindMode] = useState(false);
  const [practiceMode, setPracticeMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const createSubscription = gameId => {
    consumer.subscriptions.create(
      {
        channel: 'GamesChannel',
        game_id: gameId
      },
      {
        received: gameData => {
          setGame(gameData);
        }
      }
    );
  };

  const handleHowToPlay = () => {
    setShowTutorial(!showTutorial);
  };

  let timer;
  const handleAlerts = (content, className = 'generic') => {
    const newAlert = { content: content, className: className };
    clearTimeout(timer);
    timer = setTimeout(() => {
      setAlert(null);
    }, 3000);
    setAlert(newAlert);
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

  const togglePracticeMode = () => {
    setPracticeMode(!practiceMode);
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
        togglePracticeMode={togglePracticeMode}
        isPractice={practiceMode}
        goBack={togglePracticeMode}
      />
      <AlertBar alert={alert} />
      {game?.board ? (
        <GameBoard game={game} handleAlerts={handleAlerts} />
      ) : practiceMode ? (
        <PracticeGame />
      ) : (
        <MainMenu
          joinGame={joinGame}
          handleHowToPlay={handleHowToPlay}
          handleAlerts={handleAlerts}
          togglePracticeMode={togglePracticeMode}
        />
      )}
      <Attribution />
      <div className='background-wing'></div>
    </div>
  );
}

export default App;
