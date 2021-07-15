import React from 'react';

import UserIcon from '../components/UserIcon';

import { updateGameToDB } from '../utilities/fetchUtilities';
import { gameProgress } from '../utilities/gameUtilities';

export default function GameStats({ game, user }) {
  const nth = n => {
    return (
      n + ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || n + 'th'
    );
  };

  const add3Cards = () => {
    const body = {
      method: 'add_cards'
    };
    updateGameToDB(body, game.id);
  };

  const showAdd3Button = () => {
    return game.board.length < 15 && game.deckLength !== 0 ? (
      <button onClick={add3Cards}>+ 3 More Cards</button>
    ) : (
      <button disabled> + 3 More Cards</button>
    );
  };

  const showScores = () => {
    return game.users
      .sort((a, b) => {
        return b.points - a.points;
      })
      .map((user, i) => {
        return (
          <div className='score-row' key={i}>
            <div className='score-rank'>{nth(i + 1)}</div>
            <UserIcon user={user} size='tiny' />
            <div className='score-name'>{user.username}</div>
            <div className='score-points'>{user.points}</div>
          </div>
        );
      });
  };
  return (
    <div>
      {showAdd3Button()}
      <div className='GameStats card'>
        <UserIcon user={user} size='large' />
        <div className='user-points'>
          <p>My Score: </p> <p>{user.points}</p>
        </div>
        <div className='user-points'>
          <p>Game Progress: {gameProgress(game)}% </p>
        </div>
        <hr></hr>
        <p>Scoreboard</p>
        <div className='scores-container'>{showScores()}</div>
      </div>
    </div>
  );
}
