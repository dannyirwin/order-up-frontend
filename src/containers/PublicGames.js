export default function PublicGames({ joinGame, games }) {
  const showGameState = game => {
    if (game.state === 'Waiting for Players') {
      return <td className='status-waiting'>{game.state}</td>;
    }
    const gameProgress = Math.floor(
      (1 - (game.board.length + game.deckLength) / 81) * 100
    );
    return (
      <td className='status-playing'>{`Game Progress: ${gameProgress}%`}</td>
    );
  };

  const showGames = () => {
    return games
      .filter(game => !game.is_private)
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
