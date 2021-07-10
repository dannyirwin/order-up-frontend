import { useEffect, useState } from 'react';
import { getAllGamesFromDB } from '../utilities/fetchUtilities';

export default function PublicGames({ joinGame, games }) {
  const showGames = () => {
    return games.map((game, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{game.key}</td>
          <td>
            <button onClick={() => joinGame(game.id)}>Join Game</button>
          </td>
        </tr>
      );
    });
  };
  console.log(games);

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
