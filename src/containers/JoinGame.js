import { useState, useEffect } from 'react';
import JoinWithKey from '../components/JoinWithKey';
import { getAllGamesFromDB } from '../utilities/fetchUtilities';
import PublicGames from './PublicGames';

export default function JoinGame({ setCurrentPage, joinGame }) {
  const [allGames, setAllGames] = useState([]);

  const publicGames = () => {
    return allGames.filter(game => {
      return !game.private;
    });
  };

  useEffect(() => {
    getAllGamesFromDB().then(setAllGames);
  }, []);

  return (
    <div className='menu-card'>
      <JoinWithKey joinGame={joinGame} games={allGames} />
      <PublicGames joinGame={joinGame} games={publicGames()} />
      <button onClick={() => setCurrentPage('')}>Back To Menu</button>
    </div>
  );
}
