import { gameProgress } from '../utilities/gameUtilities';

export default function PublicGames({ joinGame, games }) {
  const showGames = () => {
    const showGameState = game => {
      switch (game.state) {
        case 'Waiting for Players':
          return <td className='status-waiting'>{game.state}</td>;
        case 'Game in progress':
          return (
            <td className='status-playing'>{`Game Progress: ${gameProgress(
              game
            )}%`}</td>
          );
        default:
          return null;
      }
    };

    return games
      .filter(game => !game.is_private && game.state !== 'Game Over')
      .map((game, i) => {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{game.key}</td>
            {showGameState(game)}
            <td>{game.users.length}</td>
            <td>
              <button onClick={() => joinGame(game.id)}>Join Game</button>
            </td>
          </tr>
        );
      });
  };

  return (
    <div>
      {games.length > 0 ? (
        <table className='PublicGames'>
          <thead>
            <tr>
              <th>#</th>
              <th>key</th>
              <th>Status</th>
              <th>Players</th>
            </tr>
          </thead>
          <tbody>{showGames()}</tbody>
        </table>
      ) : (
        <p>No Current Games</p>
      )}
    </div>
  );
}
