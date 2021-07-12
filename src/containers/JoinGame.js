import { useState, useEffect } from 'react';
import JoinWithKey from '../components/JoinWithKey';
import {
  getAllGamesFromDB,
  postNewGameToDB
} from '../utilities/fetchUtilities';
import PublicGames from './PublicGames';

export default function JoinGame({ setCurrentPage, joinGame }) {
  const [allGames, setAllGames] = useState([]);

  const publicGames = () => {
    return allGames.filter(game => {
      return !game.private;
    });
  };

  const createNewGame = (isPrivate = false) => {
    postNewGameToDB(isPrivate).then(gameData => joinGame(gameData.id));
  };

  useEffect(() => {
    getAllGamesFromDB().then(setAllGames);
  }, []);

  return (
    <div className='JoinGame card'>
      <JoinWithKey joinGame={joinGame} games={allGames} />
      <hr></hr>
      Public Games:
      <PublicGames joinGame={joinGame} games={publicGames()} />
      <button onClick={() => createNewGame()}>Create an New Game</button>
      <button onClick={() => setCurrentPage('')}>Back To Menu</button>
    </div>
  );
}
