import { useEffect, useState } from 'react';
import { getAllGamesFromDB } from '../utilities/fetchUtilities';

export default function PublicGames({ joinGame, games }) {
  const showGameState = game => {
    if (game.state === 'Waiting for Players') {
      return game.state;
    }
    const gameProgress = Math.floor(
      (1 - (game.board.length + game.deckLength) / 81) * 100
    );
    return `Game Progress: ${gameProgress}%`;
  };

  const showGames = () => {
    return games.map((game, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{game.key}</td>
          <td>{showGameState(game)}</td>
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
        <table>
          <thead>
            <th>#</th>
            <th>key</th>
            <th></th>
          </thead>
          <tbody>{showGames()}</tbody>
        </table>
      ) : (
        <p>No Current Games</p>
      )}
    </div>
  );
}
