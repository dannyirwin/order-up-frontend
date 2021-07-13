import React from 'react';

export default function GameOver({ game }) {
  const winner = () => {
    return game.users.sort((a, b) => {
      return b.points - a.points;
    })[0];
  };
  return <div>GameOver: {winner()}</div>;
}
