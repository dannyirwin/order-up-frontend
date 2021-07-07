import './App.css';

import { useEffect, useState } from 'react';

import GameBoard from './containers/GameBoard';
import Header from './containers/Header';
import HowToPlayContainer from './containers/HowToPlayContainer';

import consumer from './cable';
import {
  getAllGamesFromDB,
  getGameFromDB
} from './utilities/fetchUtilities.js';

function App() {
  const [game, setGame] = useState({});
  const [points, setPoints] = useState(0); //TODO: This will does not work over sockets and will break when you implement it.
  const [showTutorial, setShowTutorial] = useState(false);
  const [colorblindMode, setColorblindMode] = useState(false);

  // const createSubscription = () => {
  //   consumer.subscriptions.create(
  //     { channel: 'GamesChannel' },
  //     {
  //       received: game => {
  //         if (typeof game.deck === 'string') {
  //           game.deck = generateDeckFromIdString(game);
  //         }
  //         setGame(game);
  //       }
  //     }
  //   );
  // };

  const handleHowToPlay = () => {
    setShowTutorial(!showTutorial);
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

  const baseUrl = 'http://localhost:3000/';

  const getAllGamesFromDB = () => {
    fetch(baseUrl + 'games').then(res => res.json());
  };
  const getGameFromDB = id => {
    fetch(baseUrl + 'games/' + id)
      .then(res => res.json())
      .then(gameData => setGame(gameData));
  };

  useEffect(() => {
    //createSubscription();
    getGameFromDB(26);
  }, []);

  return (
    <div className='App'>
      {renderColorBlindMode()}
      {showTutorial ? (
        <HowToPlayContainer handleHowToPlay={handleHowToPlay} />
      ) : null}
      <Header
        handleHowToPlay={handleHowToPlay}
        game={game}
        points={points}
        toggleColorblindMode={toggleColorblindMode}
      />
      {game.board ? <GameBoard boardCards={game.board} /> : null}
      <div className='background-wing'></div>
      <div className='attributing'>
        Icons made by{' '}
        <a href='https://www.freepik.com' title='Freepik'>
          Freepik
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}

export default App;
