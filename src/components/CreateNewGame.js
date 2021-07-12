import React from 'react';

import { postNewGameToDB } from '../utilities/fetchUtilities';

export default function CreateNewGame({ togglePage, joinGame }) {
  const createNewGame = (isPrivate = false) => {
    postNewGameToDB(isPrivate).then(gameData => joinGame(gameData.id));
  };
  return (
    <div className='CreateNewGame'>
      <div>
        <div className='card lobby-card'>
          <button onClick={() => createNewGame(false)}>
            Create Public Game
          </button>
          <hr></hr>
          <p>
            This game will be Public and anybody will be able to join with
            either a four digit Game Key or via the Join Game page.
          </p>
        </div>
        <div className='card lobby-card'>
          <button onClick={() => createNewGame(true)}>
            Create Private Game
          </button>
          <hr></hr>
          <p>
            This game will be private and can only be joined by using a four
            digit Game Key
          </p>
        </div>
      </div>
      <button onClick={togglePage}>Back to Games Menu</button>
    </div>
  );
}
