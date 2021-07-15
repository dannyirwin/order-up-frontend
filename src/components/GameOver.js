import React from 'react';
import UserIcon from './UserIcon';

export default function GameOver({ game, setGame }) {
  const winners = () => {
    let winners = game.users.sort((a, b) => {
      return b.points - a.points;
    });
    winners = winners.filter(user => {
      return user.points >= winners[0].points;
    });
    return winners;
  };

  const showWinnerIcons = winners => {
    return winners.map(user => {
      return <UserIcon user={user} />;
    });
  };
  console.log(winners());
  const showWinners = winners => {
    if (winners.length === 1) {
      return (
        <div className='winner-message'>
          <h2> Congrats! </h2>
          <UserIcon user={winners[0]} />
          <p> You won with {winners[0].points} points!</p>
        </div>
      );
    }
    return (
      <div className='winner-message'>
        <h2>Congrats!</h2>
        <div className='winner-icons-container'>{showWinnerIcons(winners)}</div>
        <p>You all tied with {winners[0].points} each!</p>
      </div>
    );
  };
  return (
    <div>
      {showWinners(winners())}
      <button onClick={() => setGame({})}>Back To Main Menu</button>
    </div>
  );
}
