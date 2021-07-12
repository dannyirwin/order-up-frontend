import { useState } from 'react';

import GameLobby from '../components/GameLobby';
import GameOver from '../components/GameOver';
import GameInPlay from './GameInPlay';

const newUser = () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const iconId = Math.floor(Math.random() * 9) + 1;
  return {
    color: randomColor,
    icon_id: iconId
  };
};

export default function GameBoard({ game, setAlert }) {
  const [user, setUser] = useState(newUser());

  const showGame = () => {
    switch (game.state) {
      case 'Game Over':
        return <GameOver />;
      case 'Game in progress':
        if (!user?.id) {
          return (
            <GameLobby
              game={game}
              user={user}
              setUser={setUser}
              setAlert={setAlert}
            />
          );
        }
        return (
          <GameInPlay
            game={game}
            setAlert={setAlert}
            user={user}
            setUser={setUser}
          />
        );
      case 'Waiting for Players':
      default:
        return (
          <GameLobby
            game={game}
            user={user}
            setUser={setUser}
            setAlert={setAlert}
          />
        );
    }
  };

  console.log(game);

  return <div className='GameBoard'>{showGame()}</div>;
}
