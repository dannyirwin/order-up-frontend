import UserSetup from '../containers/UserSetup';
import LobbyKeyCode from './LobbyKeyCode';

import { updateGameToDB, postNewUserToDB } from '../utilities/fetchUtilities';
import LobbyGameInfo from './LobbyGameInfo';

export default function GameLobby({ game, user, setUser }) {
  console.log(game);
  const { id: gameId, key: gameKey } = game;

  const addUserToGame = e => {
    e.preventDefault();
    postNewUserToDB(user, gameId).then(setUser);
  };

  const startGame = () => {
    const body = {
      method: 'start_game'
    };
    updateGameToDB(body, gameId);
  };

  return (
    <div className='GameLobby'>
      <LobbyKeyCode gameKey={gameKey} />
      {user.id ? (
        <LobbyGameInfo startGame={startGame} players={game.users} />
      ) : (
        <UserSetup
          setUser={setUser}
          user={user}
          gameId={gameId}
          addUserToGame={addUserToGame}
        />
      )}
    </div>
  );
}
