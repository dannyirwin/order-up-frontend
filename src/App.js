import './App.css';

import { useEffect, useState } from 'react';

import GameBoard from './containers/GameBoard';
import Header from './containers/Header';
import HowToPlayContainer from './containers/HowToPlayContainer';
import Attribution from './components/Attribution';

import consumer from './cable';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

function App() {
  const [game, setGame] = useState({});
  const [points, setPoints] = useState(0); //TODO: This will does not work over sockets and will break when you implement it.
  const [showTutorial, setShowTutorial] = useState(false);
  const [colorblindMode, setColorblindMode] = useState(false);

  const gameId = 27; //TODO: THis will change

  const createSubscription = () => {
    consumer.subscriptions.create(
      { channel: 'GamesChannel' },
      {
        received: game => {
          setGame(game);
        }
      }
    );
  };

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

  // const getAllGamesFromDB = () => {
  //   fetch(baseUrl + 'games').then(res => res.json());
  // };
  const getGameFromDB = id => {
    fetch(baseUrl + 'games/' + id)
      .then(res => res.json())
      .then(gameData => setGame(gameData));
  };

  const updateDB = async body => {
    const options = {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(body)
    };
    const resp = await fetch(baseUrl + 'games/' + game.id, options);
    return await resp.json();
  };

  useEffect(() => {
    createSubscription();
    getGameFromDB(gameId);
  }, []);

  return (
    <div className='App'>
      {renderColorBlindMode()}
      {showTutorial ? (
        <HowToPlayContainer handleHowToPlay={handleHowToPlay} />
      ) : null}
      <Header
        handleHowToPlay={handleHowToPlay}
        updateDB={updateDB}
        game={game}
        points={points}
        toggleColorblindMode={toggleColorblindMode}
      />
      {game.board ? (
        <GameBoard boardCards={game.board} updateDB={updateDB} />
      ) : null}
      <div className='background-wing'></div>
      <Attribution />
    </div>
  );
}

export default App;
