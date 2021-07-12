import React from 'react';

import UserIcon from '../components/UserIcon';

export default function GameStats({ game, user }) {
  const nth = n => {
    return (
      n + ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || n + 'th'
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
    <div className='GameStats card'>
      <UserIcon user={user} size='large' />
      <div className='user-points'>
        <p>My Score: </p> <p>{user.points}</p>
      </div>
      <hr></hr>
      <p>Scoreboard</p>
      <div className='scores-container'>{showScores()}</div>
    </div>
  );
}
