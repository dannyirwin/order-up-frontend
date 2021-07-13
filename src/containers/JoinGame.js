import { useState, useEffect } from 'react';
import CreateNewGame from '../components/CreateNewGame';
import JoinWithKey from '../components/JoinWithKey';
import { getAllGamesFromDB } from '../utilities/fetchUtilities';
import PublicGames from './PublicGames';

export default function JoinGame({ setCurrentPage, joinGame }) {
  const [allGames, setAllGames] = useState([]);
  const [showCreateGame, setShowCreateGame] = useState(false);

  const publicGames = () => {
    return allGames.filter(game => {
      return !game.private;
    });
  };

  const toggleShowCreateNewGame = () => {
    setShowCreateGame(!showCreateGame);
  };

  useEffect(() => {
    getAllGamesFromDB().then(setAllGames);
  }, []);

  return (
    <div className='JoinGame card'>
      {showCreateGame ? (
        <CreateNewGame
          togglePage={toggleShowCreateNewGame}
          joinGame={joinGame}
        />
      ) : (
        <div>
          <JoinWithKey joinGame={joinGame} games={allGames} />
          <hr></hr>
          Public Games:
          <PublicGames joinGame={joinGame} games={publicGames()} />
          <button onClick={toggleShowCreateNewGame}>Create an New Game</button>
          <button onClick={() => setCurrentPage('')}>Back To Menu</button>
        </div>
      )}
    </div>
  );
}
