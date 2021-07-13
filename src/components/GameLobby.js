import UserSetup from '../containers/UserSetup';
import LobbyKeyCode from './LobbyKeyCode';

import { updateGameToDB, postNewUserToDB } from '../utilities/fetchUtilities';
import LobbyGameInfo from './LobbyGameInfo';
import GameChat from './GameChat';

export default function GameLobby({ game, user, setUser, setAlert }) {
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
      <LobbyKeyCode gameKey={gameKey} setAlert={setAlert} />
      {user.id ? (
        <LobbyGameInfo startGame={startGame} players={game.users} />
      ) : (
        <UserSetup
          setUser={setUser}
          user={user}
          gameId={gameId}
          addUserToGame={addUserToGame}
          gameState={game.state}
        />
      )}
      {user.id ? (
        <GameChat messages={game.messages} gameId={game.id} userId={user.id} />
      ) : null}
    </div>
  );
}
